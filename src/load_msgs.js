import { load_google_apis } from './google_apis.js';




var options = {
	enableHighAccuracy: true,
	timeout: 10000,
	maximumAge: 0
};

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function initiate_api(msg) {
	load_google_apis()
	.then(google => {
	    if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
			function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				const map = new google.maps.Map(document.getElementById('map'), {
					center: pos,
					zoom: 18
				});
				
				const infoWindow = new google.maps.InfoWindow();
				infoWindow.setPosition(pos);
				infoWindow.setContent(msg);
				infoWindow.open(map);
				map.setCenter(pos);	
			}, error, options);
    	}
    	else {
    		console.log('failed to get location!')
    	}
	});
}