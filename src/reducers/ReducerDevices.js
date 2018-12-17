import { FETCH_DEVICES, DELETE_DEVICE } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_DEVICES:
			return _.mapKeys(action.payload.data, 'id');
		case DELETE_DEVICE:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}