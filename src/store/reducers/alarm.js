import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	loading: false,
	error: null
};

const fetchAlarmStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const fetchAlarmSuccess = (state, action) => {	
	return updateObject(state, {
		alarm: action.alarm,
		loading:false
	});
}

const fetchAlarmFail = (state, action) => {
	return updateObject(state, {
		loading: false, 
		error: action.error
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (actionTypes.FETCH_ALARM_START): return fetchAlarmStart(state, action);
		case (actionTypes.FETCH_ALARM_SUCCESS): return fetchAlarmSuccess(state, action);
		case (actionTypes.FETCH_ALARM_FAIL): return fetchAlarmFail(state, action);

		default: return state; 
	}
}

export default reducer; 