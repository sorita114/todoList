//root store
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

import inputField from './modules/inputField';
import list from './modules/list';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	modules: {
		inputField,
		list
	},
	mutations,
	actions
});

export default store;