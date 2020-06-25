import * as actionTypes from './actionTypes'; 
import * as actions from './index';
import axios from '../../axios-patriot'; 

export const setSiteStatusStart = () => {
	return {
		type: actionTypes.SET_SITE_STATUS_START
	}
}

export const setSiteStatusSuccess = () => {
	console.log("setSiteStatusSuccess");
	return {
		type: actionTypes.SET_SITE_STATUS_SUCCESS
	}
}
	
export const setSiteStatusFail = (error) => {
	return {
		type: actionTypes.SET_SITE_STATUS_FAIL, 
		error: error
	}
}

export const setSiteStatus = (siteKey, newStatus, apiKey) => {
	return dispatch => {
		dispatch(setSiteStatusStart());
		const url = '/set/site/status/' + siteKey + '/' + newStatus + '/' + apiKey;
		return axios.get(url)
			.then(res => {
				dispatch(setSiteStatusSuccess());
			})
			.catch(err => {
				console.log(err);
			});
	};
}
