import { FETCH_USERS, FETCH_USER, DELETE_USER } from '../actions';
import _ from lodash;

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_USERS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_USER:
			return { ...state, [action.payload.data.id]: action.payload.data };
		case DELETE_USER:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}