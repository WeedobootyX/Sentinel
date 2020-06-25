import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';
import Aux from '../../hoc/ReactAux/ReactAux'

import classes from './Dashboard.module.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';
import DashboardSite from './DashboardSite/DashboardSite';
import DashboardDevice from './DashboardDevice/DashboardDevice';

class Dashboard extends Component {
	componentDidMount(){
		this.props.onFetchDashboardInfo(this.props.match.params.siteKey, 
							   			 "s3cr3tApiKey");
		this.timer = setInterval(()=> this.refreshDashboardInfo(), 5000);
	}

	refreshDashboardInfo() {
		this.props.onFetchDashboardInfo(this.props.match.params.siteKey, 
							   			 "s3cr3tApiKey");
	}

	updateSiteStatusClickHandler = (siteKey, newStatus) => {
		this.props.setSiteStatus(siteKey, newStatus);
	}

	state = {
		dummyParameter: false
	}

	render(){
		console.log("Render. classes are: ", classes);

		if(this.props.dashboardInfo) {
			const deviceListOutput = this.props.dashboardInfo.deviceList.map(device => {
				return <DashboardDevice 							
							key={'device-' + device.deviceKey} 
							id={'device-' + device.deviceKey}
							device={device}
						/>
			});
			return (			
				<Aux>
					<div className={classes.siteContainer}>
						<DashboardSite site={this.props.dashboardInfo.site} 
									   activateSiteClick={() => this.updateSiteStatusClickHandler(this.props.dashboardInfo.site.siteKey, 'active')}
									   deactivateSiteClick={() => this.updateSiteStatusClickHandler(this.props.dashboardInfo.site.siteKey, 'passive')}
									   resetSiteClick={() => this.updateSiteStatusClickHandler(this.props.dashboardInfo.site.siteKey, 'passive')}
										/>
					</div>
					<div className={classes.deviceRowsContainer}>
						{deviceListOutput}
					</div>
				</Aux>
			);
		}
		else {
				return (<div className={classes.alarmInfo}>
							 <p>Nada</p>
					    </div>
				);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		dashboardInfo: state.dashboardInfo.dashboardInfo,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchDashboardInfo : (token, siteKey) => dispatch(actions.fetchDashboardInfo(token, siteKey)),
		setSiteStatus : (siteKey, newStatus) => dispatch(actions.setSiteStatus(siteKey, newStatus))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 