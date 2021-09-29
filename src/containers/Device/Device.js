import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';
import Aux from '../../hoc/ReactAux/ReactAux'

import classes from './Device.module.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';

class Device extends Component {
	componentDidMount(){
		this.props.onFetchDeviceInfo(this.props.match.params.siteKey,
									 this.props.match.params.deviceKey, 
							   			 "s3cr3tApiKey");
		this.timer = setInterval(()=> this.refreshDeviceInfo(), 5000);
	}

	refreshDashboardInfo() {
		this.props.onFetchDeviceInfo(this.props.match.params.siteKey, 
									 this.props.match.params.deviceKey, 
							   			 "s3cr3tApiKey");
	}


	render(){
		console.log("Render in Device.");

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
		deviceInfo: state.deviceInfo.deviceInfo,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchDeviceInfo : (token, siteKey, deviceKey) => dispatch(actions.fetchDeviceInfo(token, siteKey, deviceKey)),
		setDeviceStatus : (siteKey, deviceKey, newStatus) => dispatch(actions.setDeviceStatus(siteKey, deviceKey, newStatus))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Device); 