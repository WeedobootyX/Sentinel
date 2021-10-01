import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	loading: false,
	error: null
};

const fetchDeviceInfoStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const fetchDeviceInfoSuccess = (state, action) => {	
	return updateObject(state, {
		deviceInfo: action.deviceInfo,
		loading:false
	});
}

const fetchDeviceInfoFail = (state, action) => {
	return updateObject(state, {
		loading: false, 
		error: action.error
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (actionTypes.FETCH_DEVICE_INFO_START): return fetchDeviceInfoStart(state, action);
		case (actionTypes.FETCH_DEVICE_INFO_SUCCESS): return fetchDeviceInfoSuccess(state, action);
		case (actionTypes.FETCH_DEVICE_INFO_FAIL): return fetchDeviceInfoFail(state, action);

		default: return state; 
	}
}

export default reducer; 