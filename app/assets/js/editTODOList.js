import axios from 'axios';
import {
	EDIT_TODOLIST
} from './types';
import API from './apis';

const editTODOList = (data) => {
	return axios.post(API[EDIT_TODOLIST](), data);
};

export default editTODOList;