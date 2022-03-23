export default class Model {
    constructor(storage) {
        this.storage = storage;
    }

    insert(item) {
        function getRandomId(min, max) {
            return (Math.floor(Math.random() * (max - min) + 1) + min).toString();
        }

        if (item) {
            let newItem = {
                id          : getRandomId(1, 10000),
                title       : item.title,
                createdDate : item.createdDate,
                finishedDate: item.finishedDate,
                priority    : item.priority,
                stage       : item.stage,
                contents    : item.contents
            };

            this.storage.save(newItem);
        }

    }

    update(updateItem, id) {
        this.storage.save(updateItem, id);
    }

    delete(id) {
        this.storage.delete(id);
    }

}