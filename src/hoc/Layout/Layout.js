import React, { Component } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import LocalizedStrings from 'react-localization';

import * as Localizations from './Localization'; 
import * as actions from '../../store/actions/index'; 

import Aux from '../ReactAux/ReactAux'; 

import Alert from '../../components/UI/Alert/Alert'; 
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'; 
import Navbar from '../../components/Navigation/Navbar/Navbar'; 

class Layout extends Component {

	state = {
		mainComponentWidth: null
	}

	componentWillMount(){
		this.setHeadComponentWidth(); 
	}

	setHeadComponentWidth(){
		if(document.getElementById('mainContainer')){
			this.setState({
				mainComponentWidth: document.getElementById('mainContainer').offsetWidth
			})
		}else{
			setTimeout(()=> this.setHeadComponentWidth(), 1000);
		}
	}

	onLogoClicked = () => {
		const path = '/menu/';
		this.props.history.push(path);
	}

	render(){
		const strings = new LocalizedStrings(Localizations.localizations); 
		let jsx = (<Aux>
						<p>dummy content</p>
					</Aux>)

		return jsx;
	}
}

const mapStateToProps = (state) => {
	return {
		dummy: state
	}
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout)); 