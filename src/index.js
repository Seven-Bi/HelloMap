import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { load_google_maps } from './google_apis.js';
import './index.css';




class MyMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {newMsg: false};
	}

	componentDidMount() {
		load_google_maps()
		.then(google => {
			var map, infoWindow, pos;
	        if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
				function(position) {
					pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
					map = new google.maps.Map(document.getElementById('map'), {
						center: {lat: -34.397, lng: 150.644},
						zoom: 12
					});

					// start load msgs call to server
					infoWindow = new google.maps.InfoWindow();
					infoWindow.setPosition(pos);
					infoWindow.setContent('好烦啊！终于搞定这个模块了');
					infoWindow.open(map);
					map.setCenter(pos);
				});
        	}
        	else {
        		console.log('hello')
        	}
		})
	}	

	render() {
		return (
			<div id="map">
				Loading
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<MyMap/>,
	document.getElementById('root'),	
);
