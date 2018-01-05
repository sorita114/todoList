import axios from 'axios';
import {
	UPDATE_TODOLIST
} from './types';
import API from './apis';

const updateTODOList = (todo) => {
	return axios.put(API[UPDATE_TODOLIST](todo.id), todo);
};

export default updateTODOList;