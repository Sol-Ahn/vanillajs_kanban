// DOM selectors
const addBtn = document.querySelector('.addBtn');
const overlay = document.querySelector('.modal-overlay');
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
        const data = this.kanban.updateToDo(id);
        this.model.update(data, id);
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


        overlay.addEventListener("click", () => {
            this.kanban.hide();
        });

        sorting.addEventListener("change", (e) => {
            this.sortItem(e.target.value);
        });


        document.body.onclick = (e) => {
            if (e.target.className === 'closeBtn') {
                this.kanban.hide();
            }

            if (e.target.className === "updateBtn") {
                this.kanban.show(e.target.dataset.id);
            }

            if (e.target.className === 'deleteBtn') {
                this.removeItem(e.target.dataset.id);
            }

            if (e.target.className.includes('submitBtn')) {
                if (e.target.className === "submitBtn-update") {
                    let parentTag = e.target;
                    while (parentTag.className !== 'modal-form') {
                        parentTag = parentTag.parentElement;
                    }
                    this.updateItem(parentTag.dataset.id);
                    this.kanban.hide();
                } else {
                    this.addItem();
                    this.kanban.hide();
                }
            }
        };

    };
}



