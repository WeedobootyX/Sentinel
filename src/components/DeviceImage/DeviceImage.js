import React from 'react'; 

import classes from './DeviceImage.module.css'

const deviceImage = (props) => {
    console.log("render in deviceImage");
	return (
		<div key={props.key} className={classes.QueueNumberListRow}>
			<a href={props.deviceImage.imageUrl}>
				<img src={props.deviceImage.resizedImageUrl}/>
			</a>
			<p>{props.deviceImage.created}</p>
		</div>
	);
}

export default deviceImage; 