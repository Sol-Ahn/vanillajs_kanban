// DOM selectors
const addBtn = document.querySelector('.addBtn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('form');
const sorting = document.querySelector('#sorting');


export default class Controller {

    constructor(model, kanban, todo) {
        this.model = model;
        this.kanban = kanban;
        this.init();
        this.attachEvent();
    }

// 유저 입력값 받기
    addItem() {
        const data = this.kanban.addToDo();
        this.model.insert(data);
    }

    updateItem(id) {
        this.model.update(id);
        this.kanban.updateToDo(id);
    }

    removeItem(id) {
        this.kanban.deleteToDo(id);
        this.model.delete(id);
    }

    sortItem(selectedValue) {
        this.kanban.sortToDo(selectedValue);
    }

// event 처리
    init() {
        this.kanban.render();
    }

    attachEvent() {
        addBtn.addEventListener("click", () => {
            this.kanban.show();
        });

        closeBtn.addEventListener("click", () => {
            this.kanban.hide();
        });

        overlay.addEventListener("click", () => {
            this.kanban.hide();
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addItem();
            this.kanban.hide();
        });

        sorting.addEventListener("change", (e) => {
            this.sortItem(e.target.value);
        });

        document.body.onclick = (e) => {

            if (e.target.className === "updateBtn") {
                this.updateItem(e.target.dataset.id);
            }

            if (e.target.className === 'deleteBtn') {
                this.removeItem(e.target.dataset.id);
            }
        };
    };
}



