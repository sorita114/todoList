import axios from 'axios';
import {
	EDIT_TODOLIST
} from './types';
import API from './apis';

const editTODOList = (todo) => {
	return axios.post(API[EDIT_TODOLIST](todo.id), todo);
};

export default editTODOList;