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
        this.createText = document.querySelector('input[name=create]');
        this.createButton = document.querySelector('button[name=create]');
        this.runInitEvents();
        this.runInitCreators();

    }

    runInitEvents() {
        this.createEvent();
    }

    runInitCreators() {
        this.list(CREATED);
        this.list(PROGRESS);
        this.list(DONE);
    }

    //Creators
    list(type) {
        const place = document.querySelector('#' + type);
        while (place.firstChild) {
            place.removeChild(place.lastChild);
        }
        const data = ToDoList.lists.get(type).list;
        for (const todo of data) {
            const li = document.createElement('li');
            const text = document.createTextNode(todo[1]);
            const id = document.createAttribute('data-id');
            const button = document.createElement('button');
            const deleteText = document.createTextNode('delete');
            button.appendChild(deleteText);
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

    confirmDelete(id, type) {
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


    //Events
    createEvent() {
        this.createButton.addEventListener('click', () => {
            ToDoList.create(this.createText.value);
            this.createText.value = '';
            this.list(CREATED);
        });
    }

    deleteEvent(id, type) {
        document.querySelector('[data-id="' + id + '"] button').addEventListener('click', () => {
            this.confirmDelete(id, type);
        })
    }

    deleteConfirmEvent(id, type, deleteButton, div) {
        deleteButton.addEventListener('click', () => {
            ToDoList.lists.get(type).list.delete(id);
            ToDoList.lists.get(type).setListToStorage();
            this.list(type);
            div.remove();
        })
    }

    cancelDeleteConfirmEvent(cancelButton, div) {
        cancelButton.addEventListener('click', () => {
            div.remove();
        })
    }

    toProgressEvent(id) {
        document.querySelector('[data-id="' + id + '"]').addEventListener('dblclick', () => {
            const todo = ToDoList.lists.get(CREATED).list.get(id);
            ToDoList.lists.get(CREATED).list.delete(id);
            ToDoList.lists.get(CREATED).setListToStorage();
            ToDoList.lists.get(PROGRESS).list.set(id, todo);
            ToDoList.lists.get(PROGRESS).setListToStorage();
            this.list(CREATED);
            this.list(PROGRESS);
        });
    }

    toDoneEvent(id) {
        document.querySelector('[data-id="' + id + '"]').addEventListener('dblclick', () => {
            const todo = ToDoList.lists.get(PROGRESS).list.get(id);
            ToDoList.lists.get(PROGRESS).list.delete(id);
            ToDoList.lists.get(PROGRESS).setListToStorage();
            ToDoList.lists.get(DONE).list.set(id, todo);
            ToDoList.lists.get(DONE).setListToStorage();
            this.list(PROGRESS);
            this.list(DONE);
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