import React from 'react'; 
import onlineIcon from '../../../assets/icons/online.png'; 
import offlineIcon from '../../../assets/icons/offline.png'; 

import classes from './DashboardDevice.module.css'; 

const dashboardDevice = (props) => {
	let onlineStatusIcon = null;
	if(props.device.online === true) {
		onlineStatusIcon = (<img className={classes.onlineStatusIcon} src={onlineIcon} alt="The device is online"></img>);
	}
	else {
		onlineStatusIcon = (<img className={classes.onlineStatusIcon} src={offlineIcon} alt="The device is offline"></img>);
	}
	let containerClassArr = [];
	containerClassArr.push(classes.DashboardDevice);
	if(props.device.status === 'alarm') {
		containerClassArr.push(classes.DashboardDeviceContainerAlarm);
	}
	else if(props.device.status === 'active') {
		containerClassArr.push(classes.DashboardDeviceContainerActive);
	}
	else {
		containerClassArr.push(classes.DashboardDeviceContainerPassive);
	}
	const containerClasses = containerClassArr.join(' ');
	return (
		<div className={containerClasses}>
			<h4 className={classes.MenuItemHeader}>{props.device.name} - {props.device.online} - {props.device.status}</h4>
			{onlineStatusIcon}
 		</div>
	)
}

export default dashboardDevice;