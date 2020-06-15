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
		const path = '/menu/' + this.props.menu.restaurant.restaurantKey;
		this.props.history.push(path);
	}

	render(){
		const strings = new LocalizedStrings(Localizations.localizations); 
		let jsx = (<Aux>
						{this.props.location.pathname === "/menu/" + this.props.menu.restaurant.restaurantKey || 
						 this.props.location.pathname === "/order" ? (<Toolbar 
							isAuth={this.props.isAuthenticated}
							clicked={this.sideDrawerOpenedHandler}
							checkoutClicked={this.checkOutButtonClickedHandler}
							logoClicked={this.onLogoClicked} 
							color={this.props.settings.restaurantSettings.headerColor}
						/>) : null}

						<main id={'mainContainer'} className={classes.Content}>
							{this.props.children}
							<Alert 
								show={this.state.showCheckoutWarning}>					
									<div id="alertContent">
										<p>{strings.pleaseMakeOrder}</p>
									</div>				
							</Alert>

							{this.state.mainComponentWidth ? 
								<Navbar 
									width={this.state.mainComponentWidth} 
									checkoutClicked={this.checkOutButtonClickedHandler} 
									menuClicked={this.menuButtonClickedHandler}
									show={this.props.order.orderRows.length > 0 && !this.props.location.pathname.includes("/waiting-view")}
									isMenu={this.props.location.pathname === "/menu/" + this.props.menu.restaurant.restaurantKey}
								 /> 
							: null}

						</main>	

					</Aux>)

		let mainJsx = (this.props.children); 

		return this.props.menu.restaurant.restaurantId !== undefined ? jsx : mainJsx
	}
}

const mapStateToProps = (state) => {
	return {
		null
	}
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout)); 