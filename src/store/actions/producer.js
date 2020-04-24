import * as actions from './actions';
import { http } from '../../common/services/http.service';
import { AUTH_API } from '../../common/configs/path.config';
import db from './../../common/services/db';
import { TB_PRODUCER } from './../../common/constants/constants';

export const producersLoaded = list => {
	return {
		type: actions.GET_PRODUCERS,
		payload: list,
	};
};
export const getProducers = () => {
	return dispatch => {
		db.table(TB_PRODUCER)
			.limit(70)
			.toArray()
			.then(producers => {
				dispatch(producersLoaded(producers));
			});
	};
};
