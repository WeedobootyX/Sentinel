import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 

import App from './App';
import alarmReducer from './store/reducers/alarm'; 
import dashboardInfoReducer from './store/reducers/dashboardInfo'; 
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	alarm: alarmReducer, 
	dashboardInfo: dashboardInfoReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
