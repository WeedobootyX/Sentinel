import * as actionTypes from './actionTypes'; 
import * as actions from './index';
import axios from '../../axios-patriot'; 

export const fetchAlarmStart = () => {
	return {
		type: actionTypes.FETCH_ALARM_START
	}
}

export const fetchAlarmSuccess = (alarm) => {
	return {
		type: actionTypes.FETCH_ALARM_SUCCESS, 
		alarm: alarm
	}
}
	
export const fetchAlarmFail = (error) => {
	return {
		type: actionTypes.FETCH_ALARM_FAIL, 
		error: error
	}
}

export const fetchAlarm = (apiKey, referenceKey) => {
	return dispatch => {
		dispatch(fetchAlarmStart());
		const url = '/alarm/get/' + referenceKey + '/' + apiKey;
		return axios.get(url)
			.then(res => {
				let alarm = res.data;
				dispatch(fetchAlarmSuccess(alarm));
			})
			.catch(err => {
				console.log(err);
			});
	};
}
