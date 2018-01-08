import Vue from 'vue';
import VueRouter from 'vue-router';
import TODOListBody from '../../components/chapter04/TODOListBody.vue';
import Search from '../../components/chapter04/Search.vue';

import store from '../../store_1/index';
import {
	ROOT_MENU_TYPE,
	ROOT_MENU_TYPE_UPDATE,
	SEARCH_GET_ITEM,
	SEARCH_UPDATE
} from '../../store_1/types';

Vue.use(VueRouter);

const routes = [{
	path: '/examples/chapter04',
	component: TODOListBody,
	meta: {
		menuType: 'index'
	}
}, {
	path: '/examples/chapter04/search',
	component: Search,
	meta: {
		menuType: 'search'
	},
	props: (route) => ({
		query: route.query.q
	})
}];

const router = new VueRouter({
	mode: 'history',
	routes
});

const App = new Vue({
	el: '#app',
	router,
	store,
	computed : {
		menuType () {
			return this.$store.getters[ROOT_MENU_TYPE];
		}
	},
	created () {
		this.$store.dispatch(SEARCH_UPDATE, this.$route.query.q);
		this.$store.dispatch(SEARCH_GET_ITEM);
	}
});