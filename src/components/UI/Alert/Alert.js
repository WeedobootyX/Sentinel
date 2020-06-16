import React, {Component} from 'react'; 
import * as classes from './Alert.css'; 

class Alert extends Component { 	

	shouldComponentUpdate(nextProps, nextState){
		let shouldUpdate = nextProps.show !== this.props.show || nextProps.children !== this.props.children;
		return shouldUpdate;
	}

	render(){
		return (
			<div className={classes.Alert}
				style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show ? '1' : 0
				}}
				id={this.props.identifier}
			>
				<div className={classes.AlertText}>{this.props.children}</div>
			</div>
		)
	}
}

export default Alert;  