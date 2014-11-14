
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] 	  = requestHandlers.index;
handle["/index"]  = requestHandlers.index;
handle["/upload"] = requestHandlers.upload;

server.index(router.route, handle);