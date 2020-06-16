import React from 'react'; 
import { connect } from 'react-redux'; 

import LocalizedStrings from 'react-localization';
import * as Localizations from './Localization'; 

import * as classes from './Navbar.css'; 

const navbar = (props) => {
	const strings = new LocalizedStrings(Localizations.localizations);
	strings.setLanguage('sv'); 

	// Animation start
	const navbarMaxHeight = 204; 
	const navbarEmptyHeight = 42;
	const navbarOrderRowHeight = 18;

	let maxHeight = props.order.orderRows.length > 0 ? navbarEmptyHeight + (props.order.orderRows.length * navbarOrderRowHeight) : 0; 
	let transition = 'max-height 1.2s';
	if(maxHeight >= navbarMaxHeight){
		maxHeight = navbarMaxHeight; 
	}

	if(!props.isMenu){
		transition = 'max-height 0s'; 
		maxHeight = navbarEmptyHeight + navbarOrderRowHeight;
	}

	const inlineStyle = {
	 	width: props.width,
	 	maxHeight: maxHeight + 'px',
	 	WebkitTransition: transition,
		MozTransition: transition,
		msTransition: transition,
		OTransition: transition,
		transition: transition,
	}; 
	// Animation end

	let ordersAmount = 0;
	for(var i = 0; i < props.order.orderRows.length; i++){
		ordersAmount += props.order.orderRows[i].quantity; 
	}

	return ( 
				<div className={classes.Navbar} style={inlineStyle}>
				  	<div onClick={props.menuClicked}>
				  		<h6 className={classes.MenuButtonText}>{strings.menu}</h6>
				  		<p>&nbsp;</p> {/* Invisible filler so we dont neet to mess with CSS to get the minimum required height */}
			  		</div>
				</div> 
	)
}

const mapStateToProps = (state) => {
	return {
		order: state.order
	}
}

export default connect(mapStateToProps)(navbar); 
