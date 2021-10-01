import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';
import Aux from '../../hoc/ReactAux/ReactAux';
import DeviceImage from '../../components/DeviceImage/DeviceImage';
import classes from './Device.module.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';

class Device extends Component {
	componentDidMount(){
		this.props.onFetchDeviceInfo(this.props.match.params.siteKey,
									 this.props.match.params.deviceKey, 
							   			 "s3cr3tApiKey");
		this.timer = setInterval(()=> this.refreshDeviceInfo(), 30000);
	}

	refreshDeviceInfo() {
		this.props.onFetchDeviceInfo(this.props.match.params.siteKey, 
									 this.props.match.params.deviceKey, 
							   			 "s3cr3tApiKey");
	}


	render(){
		console.log("Render in Device.");

		if(this.props.deviceInfo) {
			const deviceImagesOutput = this.props.deviceInfo.imageList.map(deviceImage => {
				return <DeviceImage 							
							key={'device-image-' + deviceImage.deviceImageId} 
							id={'device-image-' + deviceImage.deviceImageId}
							deviceImage={deviceImage}
						/>
			});
			return (			
				<Aux>
					{deviceImagesOutput}
				</Aux>
			);
		}
		else {
				return (<div className={classes.alarmInfo}>
							 <p>No information</p>
					    </div>
				);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		deviceInfo: state.deviceInfo.deviceInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchDeviceInfo : (token, siteKey, deviceKey) => dispatch(actions.fetchDeviceInfo(token, siteKey, deviceKey))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Device); 