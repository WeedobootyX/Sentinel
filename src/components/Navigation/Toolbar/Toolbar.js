import React from 'react'; 

import classes from './Toolbar.css'; 
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar} style={{backgroundColor: props.color}}>
			<Logo className={classes.Logo} clicked={props.logoClicked} />
			{/*<Checkout clicked={props.checkoutClicked} />*/}
			<nav className={classes.DesktopOnly}>			
			</nav>
		</header>
		);
}

export default toolbar; 