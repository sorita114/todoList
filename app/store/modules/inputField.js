//input field store
const inputField = {
	state: {
		text : ''
	},
	getters: {
		inputText (state) {
			return state.text;
		}
	},
	mutations: {
		reset (state) {
			state.text = '';
		},
		update (state, value) {
			state.text = value;
		}
	},
	actions : {
		reset ({commit}) {
			commit('reset');
		},
		update ({commit}, value) {
			commit('update', value);
		}
	}
};

export default inputField;