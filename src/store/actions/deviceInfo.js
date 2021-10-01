import * as actionTypes from './actionTypes'; 
import * as actions from './index';
import axios from '../../axios-patriot'; 

export const fetchDeviceInfoStart = () => {
	return {
		type: actionTypes.FETCH_DEVICE_INFO_START
	}
}

export const fetchDeviceInfoSuccess = (deviceInfo) => {
	console.log("fetchDeviceInfoSuccess. deviceInfo: ", deviceInfo);
	return {
		type: actionTypes.FETCH_DEVICE_INFO_SUCCESS, 
		deviceInfo: deviceInfo
	}
}
	
export const fetchDeviceInfoFail = (error) => {
	return {
		type: actionTypes.FETCH_DEVICE_INFO_FAIL, 
		error: error
	}
}

export const fetchDeviceInfo = (siteKey, deviceKey, apiKey) => {
	console.log('fetching device info');
	return dispatch => {
		dispatch(fetchDeviceInfoStart());
		const url = '/deviceinfo/' + siteKey + '/'  + deviceKey + '/' + apiKey;
		return axios.get(url)
			.then(res => {
				let deviceInfo = res.data;
				dispatch(fetchDeviceInfoSuccess(deviceInfo));
			})
			.catch(err => {
				console.log(err);
			});
	};
}
