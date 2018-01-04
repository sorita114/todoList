import Vue from 'vue';
import InputField from '../../components/chapter02_1/InputField';
import List from '../../components/chapter02_1/List';

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