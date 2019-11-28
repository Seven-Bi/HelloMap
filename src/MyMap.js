import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { initiate_api } from './load_msgs.js';
import './index.css';




class MyMap extends React.Component {
	render() {
		initiate_api(this.props.myMsg)
		return (
			<div id="map">
				Loading ... 
			</div>
		);
	}
}

export default MyMap