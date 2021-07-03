const CREATED = 'created';
const PROGRESS = 'progress';
const DONE = 'done';

class ToDoList {

    static lists = new Map();

    static create(text) {
        const created = this.lists.get(CREATED);
        created.list.set(created.getUid(), text);
        created.setListToStorage();
    }

    static move(id, from, to) {
        const todo = this.lists.get(from).list.get(id);
        this.lists.get(from).list.delete(id);
        this.lists.get(from).setListToStorage();
        this.lists.get(to).list.set(id, todo);
        this.lists.get(to).setListToStorage();
    }

    static delete(id, type) {
        this.lists.get(type).list.delete(id);
        this.lists.get(type).setListToStorage();
    }

    constructor(type) {
        this.type = type;
        this.constructor.lists.set(this.type, this);
        this.list = new Map( this.getListFromStorage() );
    }
    
    
    getUid() {
        const min = 100000000
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getListFromStorage() {
        let data = localStorage.getItem(this.type);
        if (null === data) {
            return [];
        }
        return JSON.parse(data);
    }

    setListToStorage() {
        const data = [...this.list];
        localStorage.setItem(this.type, JSON.stringify(data));
    }
}

class ToDoListDOM {

    constructor() {
        this.mobSize = 700;
        this.currentSize = '';
        this.createText = document.querySelector('input[name=create]');
        this.createButton = document.querySelector('button[name=create]');
        this.changeSize();
        this.runInitEvents();
        this.runInitCreators();

        this.stats();
    }

    runInitEvents() {
        this.createEvent();
        this.resizeWindow();
    }

    runInitCreators() {
        this.list(CREATED);
        this.list(PROGRESS);
        this.list(DONE);
    }

    changeSize() {
        let change = this.currentSize;
        if (window.innerWidth > this.mobSize) {
            this.currentSize = 'desktop';
        }
        else {
            this.currentSize = 'mobile';
        }
        if (change !== this.currentSize) {
            this.runInitCreators();
        }
    }

    closeModal(el) {
        el.remove();
        document.querySelectorAll('button').forEach(b => {
            b.removeAttribute('disabled');
        });
    }

    //Creators
    list(type) {
        const place = document.querySelector('#' + type);
        while (place.firstChild) {
            place.removeChild(place.lastChild);
        }
        const data = ToDoList.lists.get(type).list;
        if ('desktop' === this.currentSize) {
            for (const todo of data) {
                const li = document.createElement('li');
                const text = document.createTextNode(todo[1]);
                const id = document.createAttribute('data-id');
                const button = document.createElement('button');
                const deleteText = document.createTextNode('delete');
                button.appendChild(deleteText);
                button.classList.add('delete');
                id.value = todo[0];
                li.setAttributeNode(id); 
                li.appendChild(text);
                li.appendChild(button);
                place.appendChild(li);
                this.deleteEvent(todo[0], type);
                if (CREATED === type) {
                    this.toProgressEvent(todo[0]);
                }
                if (PROGRESS === type) {
                    this.toDoneEvent(todo[0]);
                }
            }
        }
        else {
            for (const todo of data) {
                const li = document.createElement('li');
                const text = document.createTextNode(todo[1]);
                const id = document.createAttribute('data-id');
                const button = document.createElement('button');
                const deleteText = document.createTextNode('delete');
                button.appendChild(deleteText);
                button.classList.add('delete');
                id.value = todo[0];
                li.setAttributeNode(id); 
                li.appendChild(text);

                if (CREATED === type || PROGRESS === type) {
                    const moveButton = document.createElement('button');
                    let moveText;
                    if (CREATED === type) {
                        moveText = document.createTextNode('Start task');
                    }
                    if (PROGRESS === type) {
                        moveText = document.createTextNode('Finished');
                    }
                    moveButton.appendChild(moveText);
                    moveButton.classList.add('move');
                    li.appendChild(moveButton);
                }
                
                li.appendChild(button);
                place.appendChild(li);
                this.deleteEvent(todo[0], type);

                if (CREATED === type) {
                    this.toProgressEventMobile(todo[0]);
                }
                if (PROGRESS === type) {
                    this.toDoneEventMobile(todo[0]);
                }
            }
        }
    }

    confirmDelete(id, type) {
        document.querySelectorAll('button').forEach(b => {
            b.setAttribute('disabled', true);
        });
        const div = document.createElement('div');
        const text = document.createTextNode('Really?');
        const deleteButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        const deleteText = document.createTextNode('delete');
        const cancelText = document.createTextNode('Nop');
        deleteButton.appendChild(deleteText);
        cancelButton.appendChild(cancelText);
        div.appendChild(text);
        div.appendChild(deleteButton);
        div.appendChild(cancelButton);
        div.classList.add('confirm');
        document.body.appendChild(div);
        this.deleteConfirmEvent(id, type, deleteButton, div);
        this.cancelDeleteConfirmEvent(cancelButton, div);
    }

    stats() {
        const stats = document.querySelector('#stats');
        while (stats.firstChild) {
            stats.removeChild(stats.lastChild);
        }
        const listOfTypes = new Map([
            [CREATED, 'Created: '],
            [PROGRESS, 'In progress: '], 
            [DONE, 'Done: ']]);
        for (const type of listOfTypes) {
            const size = ToDoList.lists.get(type[0]).list.size;
            const statsText = document.createTextNode(type[1] + size);
            const statsEl = document.createElement('div');
            statsEl.appendChild(statsText);
            stats.appendChild(statsEl);
        }
    }


    //Events
    createEvent() {
        this.createButton.addEventListener('click', () => {
            ToDoList.create(this.createText.value);
            this.createText.value = '';
            this.list(CREATED);
            this.stats();
        });
    }

    deleteEvent(id, type) {
        document.querySelector('[data-id="' + id + '"] button.delete').addEventListener('click', () => {
            this.confirmDelete(id, type);
        })
    }

    deleteConfirmEvent(id, type, deleteButton, div) {
        deleteButton.addEventListener('click', () => {
            ToDoList.delete(id, type);
            this.list(type);
            this.stats();
            this.closeModal(div);
        })
    }

    cancelDeleteConfirmEvent(cancelButton, div) {
        cancelButton.addEventListener('click', () => {
            this.closeModal(div);
        })
    }

    toProgressEvent(id) {
        document.querySelector('[data-id="' + id + '"]').addEventListener('dblclick', () => {
            ToDoList.move(id, CREATED, PROGRESS);
            this.list(CREATED);
            this.list(PROGRESS);
            this.stats();
        });
    }

    toProgressEventMobile(id) {
        document.querySelector('[data-id="' + id + '"] button.move').addEventListener('click', () => {
            ToDoList.move(id, CREATED, PROGRESS);
            this.list(CREATED);
            this.list(PROGRESS);
            this.stats();
        });
    }

    toDoneEvent(id) {
        document.querySelector('[data-id="' + id + '"]').addEventListener('dblclick', () => {
            ToDoList.move(id, PROGRESS, DONE);
            this.list(PROGRESS);
            this.list(DONE);
            this.stats();
        });
    }

    toDoneEventMobile(id) {
        document.querySelector('[data-id="' + id + '"] button.move').addEventListener('click', () => {
            ToDoList.move(id, PROGRESS, DONE);
            this.list(PROGRESS);
            this.list(DONE);
            this.stats();
        });
    }

    resizeWindow() {
        window.addEventListener('resize', () => {
            this.changeSize();
        });
    }





}


const l1 = new ToDoList(CREATED);
const l2 = new ToDoList(PROGRESS);
const l3 = new ToDoList(DONE);

const todo = new ToDoListDOM();


// console.log(ToDoList.lists);

// console.log(ToDoList.lists.get(CREATED).getUid());


console.log(l1.getUid());
console.log(l1.getUid());
console.log(l1.getUid());