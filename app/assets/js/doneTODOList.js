import axios from 'axios';
import {
	DONE_TODOLIST,
	GET_TODOLIST
} from './types';
import API from './apis';

const doneTODOList = (app, todo) => {
	todo.doneDatetime = new Date().getTime();
	axios
		.put(API[DONE_TODOLIST](todo.id), todo)
		.then(() => {
			app[GET_TODOLIST]();
		});
};

export default doneTODOList;
