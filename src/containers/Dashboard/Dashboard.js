import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';
import Aux from '../../hoc/ReactAux/ReactAux'

import classes from './Dashboard.module.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';
import DashboardDevice from './DashboardDevice/DashboardDevice';

class Dashboard extends Component {

	state = {
		dummyParameter: false
	}

	componentDidMount(){
		this.props.onFetchDashboardInfo(this.props.match.params.siteKey, 
							   			"s3cr3tApiKey");
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
					<div className={classes.siteNameContainer}>
						<h2>Dashboard for {this.props.dashboardInfo.site.description}</h2>
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 