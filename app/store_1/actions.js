//root store actions
import {ROOT_MENU_TYPE_UPDATE} from './types';

const actions = {
	[ROOT_MENU_TYPE_UPDATE]({commit}, type) {
		commit(ROOT_MENU_TYPE_UPDATE, type);
	}
};

export default actions;