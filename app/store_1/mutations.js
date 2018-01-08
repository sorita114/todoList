//root mutations
import {
	ROOT_MENU_TYPE,
	ROOT_MENU_TYPE_UPDATE
} from './types';

const mutations = {
	[ROOT_MENU_TYPE_UPDATE](state, type) {
		state[ROOT_MENU_TYPE] = type;
	}
};

export default mutations;