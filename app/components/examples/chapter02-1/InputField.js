import {ADD_TODOLIST} from '../../../assets/js/types';
import addTODOList from "../../../assets/js/addTODOList";

const InputField = {
	name : 'InputField',
	template : '<div class="input-group mb-3">' +
		'<input type="text"' +
				'class="form-control"' +
				'placeholder="입력하세요." ' +
				'v-model="text">' +
		'<div class="input-group-append">' +
			'<button type="button"' +
			'class="btn btn-outline-secondary"' +
			'v-on:click="addTODOList">' +
				'저장' +
			'</button>'+
		'</div>'+
	'</div>',
	data : function () {
		return {
			text: ''
		}
	},
	methods : {
		[ADD_TODOLIST] () {
			addTODOList({
				text : this.text
			}).then(() => {
				this.$emit('addlist', 'add');
			});
		}
	}
};

export default InputField;