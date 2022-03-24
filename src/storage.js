export default class Storage {
    constructor(key) {
        this.key = key;
        if (!localStorage[key]) {
            let data = {
                todos: []
            };
            localStorage[key] = JSON.stringify(data);
        }

    }

    read() {
        return JSON.parse(localStorage[this.key]).todos;
    }

    save(toDoData, id) {
        let data = JSON.parse(localStorage[this.key]);
        let toDos = data.todos;

        if (id) {
            toDos.forEach((todo) => {
                if (todo.id === id) {
                    for (const key in toDoData) {
                        todo[key] = toDoData[key];
                    }
                }
            });
            localStorage.setItem(this.key, JSON.stringify(data));
        } else {
            toDos.push(toDoData);
            localStorage.setItem(this.key, JSON.stringify(data));
        }
    }

    delete(id) {
        let data = JSON.parse(localStorage[this.key]);
        let toDos = data.todos;
        data.todos = toDos.filter((todo) => todo.id !== id);
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}