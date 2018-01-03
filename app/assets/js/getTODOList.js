import axios from 'axios';
import {GET_TODOLIST} from './types';
import API from './apis';

const getTODOList = (pp) => {
	return axios.get(API[GET_TODOLIST]());
};

export default getTODOList;