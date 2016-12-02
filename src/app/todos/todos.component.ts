import { Component, OnInit } from '@angular/core';

import { ITodo } from './../shared/todo.model';
import { TodoService } from './../shared/todo.service';


@Component({
	selector : 'my-todos',
	templateUrl : './todos.component.html'
})

export class TodosComponent implements OnInit {
	todos: ITodo[];
	todoService: TodoService;

	constructor(todoService: TodoService) {
		this.todos = [];
		this.todoService = todoService;
	}

	ngOnInit() {
		this.getTodos();
	}

	onTodoCreated(todo: ITodo): void {
		this.todoService.addTodo(todo);
		this.getTodos();
	}

	onTodoToggled(todo: ITodo): void {
		let id = this.todos.indexOf(todo);
		this.todoService.saveTodo(id, todo);
		this.getTodos();
	}

	onTodoDeleted(todo: ITodo): void {
		let id = this.todos.indexOf(todo);
		this.todoService.deleteTodo(id);
		this.getTodos();
	}

	private getTodos(): void {
		this.todos = this.todoService.getTodos();
	}
}
