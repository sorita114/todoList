import {
	ADD_TODOLIST,
	DONE_TODOLIST,
	EDIT_TODOLIST,
	UPDATE_TODOLIST,
	REMOVE_TODOLIST,
	GET_TODOLIST
} from './types';

const HOST = 'http://localhost:8080';
const API = {
	[ADD_TODOLIST]() {
		return `${HOST}/v1/todo`;
	},
	[DONE_TODOLIST](id) {
		return `${HOST}/v1/todo/${id}`;
	},
	[EDIT_TODOLIST](id) {
		return `${HOST}/v1/todo/${id}`;
	},
	[UPDATE_TODOLIST](id) {
		return `${HOST}/v1/todo/${id}`;
	},
	[GET_TODOLIST]() {
		return `${HOST}/v1/todo?sort=createdDatetime,desc`;
	},
	[REMOVE_TODOLIST] (id) {
		return `${HOST}/v1/todo/${id}`;
	}
};

export default API;