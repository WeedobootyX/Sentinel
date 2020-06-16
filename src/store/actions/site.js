import * as actionTypes from './actionTypes'; 
import * as actions from './index';
import axios from '../../axios-orders'; 

export const fetchSiteStart = () => {
	return {
		type: actionTypes.FETCH_SITE_START
	}
}

export const fetchSiteSuccess = (site) => {
	return {
		type: actionTypes.FETCH_SITE_SUCCESS, 
		site: site
	}
}
	
export const fetchSiteFail = (error) => {
	return {
		type: actionTypes.FETCH_SITE_FAIL, 
		error: error
	}
}

export const fetchSite = (apiKey, siteKey) => {
	return dispatch => {
		dispatch(fetchSiteStart());
		const url = '/site/get/' + siteKey + '/' + apiKey;
		return axios.get(url)
			.then(res => {
				let site = res.data;
				dispatch(fetchSiteSuccess(site));
			})
			.catch(err => {
				console.log(err);
			});
	};
}
