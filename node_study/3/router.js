function route(handle, pathname, res, postData) {
	console.log("About to route request to " + pathname);
	if ( typeof handle[pathname] === 'function') {
		return handle[pathname](res, postData);
	} else {
		console.log("No request handler found for " + pathname);
		return "404 Not found";
	}
}
exports.route = route;
