import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	loading: false,
	error: null
};

const fetchDashboardInfoStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const fetchDashboardInfoSuccess = (state, action) => {	
	return updateObject(state, {
		dashboardInfo: action.dashboardInfo,
		loading:false
	});
}

const fetchDashboardInfoFail = (state, action) => {
	return updateObject(state, {
		loading: false, 
		error: action.error
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (actionTypes.FETCH_DASHBOARD_INFO_START): return fetchDashboardInfoStart(state, action);
		case (actionTypes.FETCH_DASHBOARD_INFO_SUCCESS): return fetchDashboardInfoSuccess(state, action);
		case (actionTypes.FETCH_DASHBOARD_INFO_FAIL): return fetchDashboardInfoFail(state, action);

		default: return state; 
	}
}

export default reducer; 