import React from 'react'; 
import Image from 'react-bootstrap/Image'

import classes from './Logo.css';
import { connect } from 'react-redux'; 

const logo = (props) => {

	const appliedClasses = ['img', 'img-responsive', classes.LogoImage].join(' '); 
	return (
		<Image className={appliedClasses} src={props.restaurant.logoURL} onClick={props.clicked} />
	);
}; 

const mapStateToProps = state => {
	return {
		restaurant: state.menu.restaurant
	}
}

export default connect(mapStateToProps, null) (logo); 