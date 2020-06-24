import * as actionTypes from './actionTypes'; 
import * as actions from './index';
import axios from '../../axios-patriot'; 

export const fetchDashboardInfoStart = () => {
	return {
		type: actionTypes.FETCH_DASHBOARD_INFO_START
	}
}

export const fetchDashboardInfoSuccess = (dashboardInfo) => {
	console.log("fetchDashboardInfoSuccess. dashboardInfo: ", dashboardInfo);
	return {
		type: actionTypes.FETCH_DASHBOARD_INFO_SUCCESS, 
		dashboardInfo: dashboardInfo
	}
}
	
export const fetchDashboardInfoFail = (error) => {
	return {
		type: actionTypes.FETCH_DASHBOARD_INFO_FAIL, 
		error: error
	}
}

export const fetchDashboardInfo = (siteKey, apiKey) => {
	return dispatch => {
		dispatch(fetchDashboardInfoStart());
		const url = '/dashboardinfo/' + siteKey + '/' + apiKey;
		return axios.get(url)
			.then(res => {
				let dashboardInfo = res.data;
				dispatch(fetchDashboardInfoSuccess(dashboardInfo));
			})
			.catch(err => {
				console.log(err);
			});
	};
}
