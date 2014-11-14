
var http = require("http");
var url	 = require("url");

function index(route, handle) {

	function onRequest(request, response) {

		var data = "";
	
		var pathname = url.parse(request.url).pathname;
		console.log("Request: " + pathname);
		
		request.setEncoding("utf-8");
		
		request.addListener("data", function(dataSlice) {
		
			data += dataSlice;
			console.log("Incoming '" + dataSlice + "'.");
		});
		
		request.addListener("end", function() {
		
			route(handle, pathname, response, data);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Start server");
}

exports.index = index;
