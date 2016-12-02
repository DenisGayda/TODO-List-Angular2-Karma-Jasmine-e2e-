import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../shared/todo.model';

@Component ({
	selector: 'my-todo-item',
	templateUrl: './todo-item.component.html'
})

export class TodoItemComponent {
	@Input() todo: Todo;
	@Output() toggled: EventEmitter<Todo>;
	@Output() deleted: EventEmitter<Todo>;

	constructor() {
		this.deleted = new EventEmitter<Todo>();
		this.toggled = new EventEmitter<Todo>();
	}

	toggle() {
		this.toggled.emit(this.todo);
	}

	delete() {
		this.deleted.emit(this.todo);
	}
};
