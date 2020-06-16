import asyncComponent from '../hoc/asyncComponent/asyncComponent'; 

export const Dashboard = asyncComponent(() => {
	return import('./Dashboard/Dashboard');
});

export const Alarm = asyncComponent(() => {
	return import('./Alarm/Alarm'); 
});