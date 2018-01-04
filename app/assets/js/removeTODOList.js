import axios from 'axios';
import {
	REMOVE_TODOLIST
} from './types';
import API from './apis';

const removeTODOList = (id) => {
	return axios.delete(API[REMOVE_TODOLIST](id));
};

export default removeTODOList;
