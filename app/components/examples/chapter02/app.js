import Vue from 'vue';
import axios from 'axios';

const App = new Vue({
	el: '#app',
	data : {
		todos : [],
		newTodo : ''
	},
	created () {
		getTodo();
	},
	methods : {
		add () {
			addTodo(this, {text: this.newTodo});
		}
	}
});

function addTodo(target, data) {
	axios
		.post('http://localhost:8080/v1/todo', data)
		.then(() => {
			target.newTodo = '';

			let todos = [data, ...target.todos];

			target.todos = todos;
		});
}

function getTodo() {
	axios
		.get('http://localhost:8080/v1/todo', {
			headers : {
				'Access-Control-Allow-Origin' : '*'
			}
		})
		.then((response) => {
			App.$set(App._data, 'todos', response.data._embedded.todos);
		});
}
