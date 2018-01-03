import {
	ADD_TODOLIST,
	DONE_TODOLIST,
	GET_TODOLIST
} from './types';

const HOST = 'http://localhost:8080';
const API = {
	[ADD_TODOLIST]() {
		return `${HOST}/v1/todo`;
	},
	[DONE_TODOLIST](id) {
		return `${HOST}/v1/todo/${id}`
	},
	[GET_TODOLIST]() {
		return `${HOST}/v1/todo?sort=createdDatetime,desc`
	}
};

export default API;