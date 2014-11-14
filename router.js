
function route(handle, pathname, response, postData) {

	console.log("Route: " + pathname);
	
	if(typeof handle[pathname] === 'function') {
	
		return handle[pathname](response, postData);
	
	} else {
	
		console.log("Don't found " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;