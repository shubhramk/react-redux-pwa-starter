import * as actions from './actions';
import { http } from '../../common/services/http.service';
import { stringifyJSON, parseJSON } from '../../common/utils/utility';

export const syncStart = () => {
	return {
		type: actions.SYNC_START,
	};
};

export const syncSuccess = () => {
	return {
		type: actions.SYNC_SUCCESS,
	};
};

export const syncFail = error => {
	return {
		type: actions.SYNC_FAIL,
		error: error,
	};
};

export const syncDB = () => {
	return dispatch => {
		console.log('SYNC DB');
		dispatch(syncStart());
	};
};
