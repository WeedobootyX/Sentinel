import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	loading: false,
	error: null
};

const fetchSiteStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const fetchSiteSuccess = (state, action) => {	
	return updateObject(state, {
		site: action.site,
		loading:false
	});
}

const fetchSiteFail = (state, action) => {
	return updateObject(state, {
		loading: false, 
		error: action.error
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (actionTypes.FETCH_SITE_START): return fetchSiteStart(state, action);
		case (actionTypes.FETCH_SITE_SUCCESS): return fetchSiteSuccess(state, action);
		case (actionTypes.FETCH_SITE_FAIL): return fetchSiteFail(state, action);

		default: return state; 
	}
}

export default reducer; 