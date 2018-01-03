import axios from 'axios';
import {GET_TODOLIST} from './types';
import API from './apis';

const getTODOList = (app) => {
	axios
		.get(API[GET_TODOLIST]())
		.then((response) => {
			app.todos = response.data._embedded.todos;
		});
};

export default getTODOList;