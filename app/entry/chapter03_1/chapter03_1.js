import Vue from 'vue';
import {mapGetters} from 'vuex';

import {LIST_TODO_TOTAL_COUNT} from '../../store_1/types';
import InputField from '../../components/chapter03_1/InputField.vue';
import List from '../../components/chapter03_1/List.vue';

import store from '../../store_1/index';

Vue.component('InputField', InputField);
Vue.component('List', List);

const App = new Vue({
	el: '#app',
	store,
	computed: {
		...mapGetters({
			totalCount : LIST_TODO_TOTAL_COUNT
		})
	},
	methods: {
		onChangeStatus(status) {
			return this.status = status;
		},
		onSetTotalCount(count) {
			return this.totalCount = count;
		}
	}
});