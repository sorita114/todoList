import Vue from 'vue';
import axios from 'axios';

const App = new Vue({
	el: '#app',
	data: {
		newTodo: '',
		todos : []
	},
	created () {
		this.getList();
	},
	methods : {
		add () {
			axios
				.post('http://localhost:8080/v1/todo', {
					text: this.newTodo
				})
				.then(() => {
					this.text = '';
					this.getList();
				});
		},
		done (todo) {
			todo.doneDatetime = new Date().getTime();
			axios
				.put('http://localhost:8080/v1/todo/' + todo.id, todo)
				.then(() => {
					this.getList();
				});
		},
		getList () {
			axios
				.get('http://localhost:8080/v1/todo')
				.then((response) => {
					this.todos = response.data._embedded.todos;
				});
		},
		isActive(todo) {
			return todo.doneDatetime !== null ? 'active' : '';
		}
	}
});