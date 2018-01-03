import axios from 'axios';
import {
	ADD_TODOLIST,
	GET_TODOLIST
} from './types';
import API from './apis';

const addTODOList = (app, data) => {
	axios
		.post(API[ADD_TODOLIST](), data)
		.then(() => {
			app[GET_TODOLIST]();
		});
};

export default addTODOList;