import React from 'react'; 
import LocalizedStrings from 'react-localization';

import classes from './DashboardSite.module.css'; 
import * as Localizations from './Localization'; 
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';

const onClickActionButton = () => {
	console.log('BUTTON PRESSED');
}

const dashboardSite = (props) => {
	const strings = new LocalizedStrings(Localizations.localizations);
	strings.setLanguage('en');
	let containerClassArr = [];
	containerClassArr.push(classes.DashboardSite);
	let actionButton = null;
	if(props.site.status === 'alarm') {
		actionButton = (<button className={classes.ActionButton} 
								onClick={props.resetSiteClick}>
							<span>{strings.resetButtonTxt}</span>
						</button>);
		containerClassArr.push(classes.DashboardSiteContainerAlarm);
	}
	else if(props.site.status === 'active') {
		actionButton = (<button className={classes.ActionButton} 
								onClick={props.deactivateSiteClick}>
							<span>{strings.deactivateButtonTxt}</span>
						</button>);
		containerClassArr.push(classes.DashboardSiteContainerActive);
	}
	else {
		containerClassArr.push(classes.DashboardSiteContainerPassive);
		actionButton = (<button className={classes.ActionButton} 
								onClick={props.activateSiteClick}>
							<span>{strings.activateButtonTxt}</span>
						</button>);
	}
	const containerClasses = containerClassArr.join(' ');
	return (
		<div className={containerClasses}>
			<h4 className={classes.SiteHeader}>{props.site.name} - {props.site.status}</h4>
			<Link to="/device:siteId/:deviceId" className={classes.openDeviceLink} >{strings.openDevicePage}</Link>
			{actionButton}
 		</div>
	)
}

export default dashboardSite;