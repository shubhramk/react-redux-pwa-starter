import * as actions from '../actions/actions';
import { updateObject } from '../../common/utils/utility';

const initialState = {
	list: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_PRODUCERS:
			return updateObject(state, {
				list: action.payload,
			});
		default:
			return state;
	}
};

export default reducer;
