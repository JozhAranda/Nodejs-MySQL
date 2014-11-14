
var querystring = require("querystring");

function index(response, postData) {
	
	console.log("index has been called");

	var body = 
		'<html lang="en">'+
			'<head>'+
				'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
				'<link href="http://bootswatch.com/yeti/bootstrap.min.css" rel="stylesheet">'+
			'</head>'+
			'<body>'+
				'<div class="container">'+
					'<div class="col-md-4 col-md-offset-4 well well-xs" style="margin-top: 12%;">'+
						'<form action="/upload" method="post" class="form">'+
							'<div class="form-group">'+	
								'<input type="text" name="name" class="form-control" placeholder="Nombre"/>'+
							'</div>'+
							'<div class="form-group">'+
								'<input type="number" name="age" class="form-control" placeholder="Edad">'+
							'</div>'+
							'<div class="form-group">'+
								'<input type="tel" name="phone" class="form-control" placeholder="Teléfono">'+
							'</div>'+
							'<div class="form-group">'+	
								'<input type="text" name="profession" class="form-control" placeholder="Profesión">'+
							'</div>'+
							'<div class="form-group text-right">'+	
								'<input type="submit" value="Enviar" class="btn btn-primary"/>'+
							'</div>'+
						'</form>'+
					'</div>'+
				'</div>'+
			'</body>'+
		'</html>';	
		
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, data) {
	
	var DB 	= require('./core/database');
	var con = new DB();
	
	response.writeHead(200, {"Content-Type": "text/html"});
	
	var dateTime = new Date();

	var success = con.saveSingleData([
		querystring.parse(data)["name"], 
		querystring.parse(data)["age"], 
		querystring.parse(data)["phone"], 
		querystring.parse(data)["profession"], 
		dateTime
	]);
	
	if(success !== "") {
		
		response.write("Success upload");
	}
	
	response.end();
}

exports.index  = index;
exports.upload = upload;
