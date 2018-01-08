//root store
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

import inputField from './modules/inputField';
import list from './modules/list';
import search from './modules/search';

import {ROOT_MENU_TYPE} from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		[ROOT_MENU_TYPE]: 'index'
	},
	getters: {
		[ROOT_MENU_TYPE](state) {
			return state[ROOT_MENU_TYPE];
		}
	},
	modules: {
		inputField,
		list,
		search
	},
	mutations,
	actions
});

export default store;