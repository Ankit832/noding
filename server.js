



var http=require("http");
var url=require("url");


function start(route)
{

http.createServer(onRequest).listen(9000);


		function onRequest(request,response)
		{
				var pathName=url.parse(request.url).pathname;		
				route(pathName);
	  
				console.log("request recieved");
				response.writeHead(200,{"Text-Type":"text/plain"});

				response.write("hii ankit");
				response.end();	
		}
	
		function callit(request,response)
		{
	
				console.log("request recieved");
				response.writeHead(200,{"Text-Type":"text/plain"});

				response.write("hii ankit");
				response.end();	
		}


console.log("server started");
}

exports.start=start;