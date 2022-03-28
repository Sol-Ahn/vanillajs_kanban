import Storage from "./storage";
import Model from "./model";
import Kanban from "./views/kanban";
import Controller from "./controller";
import "./styles/main.scss";

class App {
	constructor() {
		this.storage = new Storage("todoList");
		this.model = new Model(this.storage);
		this.kanban = new Kanban(this.storage);
		this.controller = new Controller(this.model, this.kanban);
	}
}

new App();
