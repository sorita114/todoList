import {DONE_TODOLIST, GET_TODOLIST} from '../../../assets/js/types';
import doneTODOList from '../../../assets/js/doneTODOList';
import getTODOList from '../../../assets/js/getTODOList';

const template = '<ul class="list-unstyled">' +
	'<li v-for="todo in todos"' +
	'v-bind:class="isActive(todo)">'+
		'<div class="input-group mb-3">' +
			'<div class="input-group-prepend">'+
				'<div class="input-group-text">'+
					'<input type="checkbox"'+
					'v-on:click="doneTODOList(todo)">' +
				'</div>' +
			'</div>' +
		'<p class="form-control">{{todo.text}}</p>'+
		'</div>'+
	'</li>' +
'</ul>';

const List = {
	name: 'List',
	template,
	data() {
		return {
			todos: []
		}
	},
	props: [
		'status'
	],
	created () {
		this[GET_TODOLIST]();
	},
	watch : {
		status () {
			this[GET_TODOLIST]();
		}
	},
	methods: {
		[DONE_TODOLIST](todo) {
			doneTODOList(todo)
				.then(() => {
					this.$emit('changestatus', 'done');
				});
		},
		[GET_TODOLIST]() {
			getTODOList()
				.then((response) => {
					this.todos = response.data._embedded.todos;
					this.$emit('totalcount', this.todos.length);
				});
		},
		isActive(todo) {
			return todo.doneDatetime !== null ? 'active' : '';
		}
	}
};

export default List;
