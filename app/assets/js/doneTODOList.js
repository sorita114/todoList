import axios from 'axios';
import {
	DONE_TODOLIST
} from './types';
import API from './apis';

const doneTODOList = (todo) => {
	todo.doneDatetime = new Date().getTime();
	return axios.put(API[DONE_TODOLIST](todo.id), todo);
};

export default doneTODOList;
