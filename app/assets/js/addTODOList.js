import axios from 'axios';
import {
	ADD_TODOLIST
} from './types';
import API from './apis';

const addTODOList = (data) => {
	return axios.post(API[ADD_TODOLIST](), data);
};

export default addTODOList;