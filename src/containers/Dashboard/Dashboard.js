import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';

import classes from './Dashboard.css'; 
import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index';

class Dashboard extends Component {

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
		site: state.site.site,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSite : (token, siteKey) => dispatch(actions.fetchSite(token, siteKey)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 