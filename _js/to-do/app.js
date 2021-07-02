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
            id.value = todo[0];
            li.setAttributeNode(id); 
            li.appendChild(text);
            place.appendChild(li);
        }
    }


    //Events
    createEvent() {
        this.createButton.addEventListener('click', () => {
            ToDoList.create(this.createText.value);
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