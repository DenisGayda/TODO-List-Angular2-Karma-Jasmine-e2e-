import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../shared/todo.model';



@Component({
	selector: 'my-todo-form',
	templateUrl: './todo-form.component.html'
})

export class TodoFormComponent {
	@Output() created: EventEmitter<Todo>;

	constructor() {
		this.created = new EventEmitter<Todo>();
	}

	create(title: string): void {
		if (title) {
			let todo = new Todo(title);
			this.created.emit(todo);
		}
	}
};
