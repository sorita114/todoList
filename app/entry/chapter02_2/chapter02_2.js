import Vue from 'vue';
import InputField from '../../components/chapter02_2/InputField.vue';
import List from '../../components/chapter02_2/List.vue';

Vue.component('InputField', InputField);
Vue.component('List', List);

const App = new Vue({
	el: '#app',
	data: {
		status : 'init', //add, done
		totalCount : 0
	},
	methods : {
		onChangeStatus (status) {
			return this.status = status;
		},
		onSetTotalCount (count) {
			return this.totalCount = count;
		}
	}
});