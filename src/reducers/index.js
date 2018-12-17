import { combineReducers } from 'redux';
import UsersReducer from './ReducerUsers';
import DevicesReducer from './ReducerDevices';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	users: UsersReducer,
	devices: DevicesReducer,
	form: formReducer
});

export default rootReducer;