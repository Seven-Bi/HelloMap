



export function load_google_apis() {
	return new Promise(function(resolve, reject) {
		window.resolveGoogleMapsPromise = function() {
			resolve(window.google);
			delete window.resolveGoogleMapsPromise;
		}
		const script = document.createElement('script');
		script.src = 'https://maps.googleapis.com/maps/api/js?key={your key}&'+
		'callback=resolveGoogleMapsPromise'
		script.async = true;
		document.body.appendChild(script);
	});
}
