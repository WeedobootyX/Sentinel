import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';

import classes from './Alarm.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';

class Alarm extends Component {

	state = {
		dummyParameter: false
	}

	componentDidMount(){
	}

	render(){
		if(this.props.alarm) {
				return (<div className={classes.alarmInfo}>
							 <p>dummy</p>
					    </div>
				);
		}
		else {
			return (<div />);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		alarm: state.alarm.alarm,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAlarm : (token, siteKey) => dispatch(actions.fetchAlarm(token, siteKey)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingView); 