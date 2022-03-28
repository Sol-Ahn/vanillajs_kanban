export default class Model {
	constructor(storage) {
		this.storage = storage;
	}

	insert(item) {
		if (item) {
			let newItem = {
				id: item.id,
				title: item.title,
				createdDate: item.createdDate,
				finishedDate: item.finishedDate,
				priority: { text: item.priority.text, value: item.priority.value },
				stage: item.stage,
				contents: item.contents,
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
