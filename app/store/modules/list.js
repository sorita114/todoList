import addTODOList from "../../assets/js/addTODOList";
import getTODOList from "../../assets/js/getTODOList";
import removeTODOList from "../../assets/js/removeTODOList";
import updateTODOList from '../../assets/js/updateTODOList';

const list = {
	state: {
		todos: []
	},
	getters: {
		todos (state) {
			return state.todos;
		},
		totalCount (state) {
			return state.todos.length;
		}
	},
	mutations: {
		getList (state) {
			getTODOList()
				.then((response) => {
					state.todos = response.data._embedded.todos;
				});
		},
		updateList (state, data) {
			updateTODOList(data)
				.then(() => {
					this.dispatch('getList');
				});
		},
		removeItem (state, id) {
			removeTODOList(id)
				.then(() => {
					this.dispatch('getList');
				});
		},
		addItem (state, data) {
			addTODOList(data)
				.then(() => {
					this.dispatch('reset');
					this.dispatch('getList');
				});
		}
	},
	actions: {
		getList({commit}) {
			commit('getList');
		},
		addItem({commit, rootState, dispatch}, data) {
			commit('addItem', data);
		},
		doneItem({commit}, data) {
			data.doneDatetime = !data.doneDatetime ? new Date().getTime() : null;
			console.log('data : ', data);
			commit('updateList', data);
		},
		removeItem({commit}, data){
			commit('removeItem', data);
		},
		editItem({commit}, data) {
			commit('updateList', data);
		}
	}
};

export default list;