import Vue from 'vue';
import InputField from '../../components/chapter03/InputField.vue';
import List from '../../components/chapter03/List.vue';

import store from '../../store/index';

Vue.component('InputField', InputField);
Vue.component('List', List);

const App = new Vue({
	el: '#app',
	store,
	methods : {
		onChangeStatus (status) {
			return this.status = status;
		},
		onSetTotalCount (count) {
			return this.totalCount = count;
		}
	}
});