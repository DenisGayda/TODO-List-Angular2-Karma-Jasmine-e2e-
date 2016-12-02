import { Injectable } from '@angular/core';
import { ITodo } from './todo.model';


@Injectable()
export class TodoService {

	getTodos() {
		let todos = new Array;
	    let todos_str = localStorage.getItem('todo');
	    if (todos_str !== null) {
	        todos = JSON.parse(todos_str);
	    }

	    return todos;
	}

	addTodo(todo: ITodo) {
		let todos = this.getTodos() || [];
		todos.push(todo);
		localStorage.setItem('todo', JSON.stringify(todos));

		return false;
	}

	deleteTodo(id: number) {
		let todos = this.getTodos();
    	todos.splice(id, 1);
    	localStorage.setItem('todo', JSON.stringify(todos));

    	return false;
	}

	saveTodo(id: number, todo: ITodo) {
		let todos = this.getTodos();
		todo.done = !todo.done;
		todos.splice(id, 1, todo);

		localStorage.setItem('todo', JSON.stringify(todos));

		return false;
	}
}
