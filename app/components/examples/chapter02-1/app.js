import Vue from 'vue';
import {
	ADD_TODOLIST,
	DONE_TODOLIST,
	GET_TODOLIST
} from '../../../assets/js/types';

import addTODOList from '../../../assets/js/addTODOList';
import getTODOList from '../../../assets/js/getTODOList';
import doneTODOList from '../../../assets/js/doneTODOList';

const App = new Vue({
	el: '#app',
	data: {
		newTodo: '',
		todos: []
	},
	created() {
		this[GET_TODOLIST]();
	},
	methods: {
		[ADD_TODOLIST]() {
			addTODOList(this, {
				text: this.newTodo
			});
		},
		[DONE_TODOLIST](todo) {
			doneTODOList(this, todo);
		},
		[GET_TODOLIST]() {
			getTODOList(this);
		},
		isActive(todo) {
			return todo.doneDatetime !== null ? 'active' : '';
		}
	}
});