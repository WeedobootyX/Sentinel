import React from 'react'; 

import * as classes from './Button.module.css'; 
import * as globalClasses from '../../../App.css'; 

const button = (props) => (
	<button
		disabled={props.disabled}
		className={[classes.Button, classes[props.btnType], globalClasses.Material].join(' ')}
		style={props.inlineStyle}
		onClick={props.clicked}>{props.children}</button>
);

export default button; 