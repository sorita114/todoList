import {
	INPUT_FIELD_INPUT_TEXT,
	INPUT_FIELD_RESET,
	INPUT_FIELD_UPDATE
} from '../types';

const inputField = {
	state: {
		text: ''
	},
	getters: {
		[INPUT_FIELD_INPUT_TEXT](state) {
			return state.text;
		}
	},
	mutations: {
		[INPUT_FIELD_RESET](state) {
			state.text = '';
		},
		[INPUT_FIELD_UPDATE](state, value) {
			state.text = value;
		}
	},
	actions: {
		[INPUT_FIELD_RESET]({commit}) {
			commit(INPUT_FIELD_RESET);
		},
		[INPUT_FIELD_UPDATE]({commit}, value) {
			commit(INPUT_FIELD_UPDATE, value);
		}
	}
};

export default inputField;