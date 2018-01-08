import addTODOList from "../../assets/js/addTODOList";
import getTODOList from "../../assets/js/getTODOList";
import removeTODOList from "../../assets/js/removeTODOList";
import updateTODOList from '../../assets/js/updateTODOList';

import {
	INPUT_FIELD_RESET,
	LIST_TODO,
	LIST_TODO_TOTAL_COUNT,
	LIST_TODO_GET_LIST,
	LIST_TODO_UPDATE_ITEM,
	LIST_TODO_REMOVE_ITEM,
	LIST_TODO_ADD_ITEM
} from '../types';

const list = {
	state: {
		todos: []
	},
	getters: {
		[LIST_TODO](state) {
			return state.todos;
		},
		[LIST_TODO_TOTAL_COUNT](state) {
			return state.todos.length;
		}
	},
	mutations: {
		[LIST_TODO_GET_LIST](state) {
			getTODOList()
				.then((response) => {
					state.todos = response.data._embedded.todos;
				});
		},
		[LIST_TODO_UPDATE_ITEM](state, data) {
			updateTODOList(data)
				.then(() => {
					this.dispatch(LIST_TODO_GET_LIST);
				});
		},
		[LIST_TODO_REMOVE_ITEM](state, id) {
			removeTODOList(id)
				.then(() => {
					this.dispatch(LIST_TODO_GET_LIST);
				});
		},
		[LIST_TODO_ADD_ITEM](state, data) {
			addTODOList(data)
				.then(() => {
					this.dispatch(INPUT_FIELD_RESET);
					this.dispatch(LIST_TODO_GET_LIST);
				});
		}
	},
	actions: {
		[LIST_TODO_GET_LIST]({commit}) {
			commit(LIST_TODO_GET_LIST);
		},
		[LIST_TODO_ADD_ITEM]({commit, rootState, dispatch}, data) {
			commit(LIST_TODO_ADD_ITEM, data);
		},
		[LIST_TODO_REMOVE_ITEM]({commit}, data) {
			commit(LIST_TODO_REMOVE_ITEM, data);
		},
		[LIST_TODO_UPDATE_ITEM]({commit}, data) {
			commit(LIST_TODO_UPDATE_ITEM, data);
		}
	}
};

export default list;