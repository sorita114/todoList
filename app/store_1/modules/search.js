import axios from 'axios';
import APIS from '../../assets/js/apis';
import {SEARCH_TODOLIST} from '../../assets/js/types';
import {
	SEARCH_VALUE,
	SEARCH_UPDATE,
	SEARCH_RESULT,
	SEARCH_GET_ITEM
} from '../types';

const search = {
	state: {
		value: '',
		result: []
	},
	getters: {
		[SEARCH_VALUE](state) {
			return state.value;
		},
		[SEARCH_RESULT](state) {
			return state.result;
		}
	},
	mutations: {
		[SEARCH_GET_ITEM](state) {
			axios.get(APIS[SEARCH_TODOLIST](encodeURIComponent('%' + state.value + '%')))
				.then((response) => {
					state.result = response.data._embedded.todos;
				});
		},
		[SEARCH_UPDATE](state, value) {
			state.value = value;
		}
	},
	actions: {
		[SEARCH_GET_ITEM]({commit}) {
			commit(SEARCH_GET_ITEM);
		},
		[SEARCH_UPDATE]({commit}, value) {
			commit(SEARCH_UPDATE, value);
		}
	}
};

export default search;