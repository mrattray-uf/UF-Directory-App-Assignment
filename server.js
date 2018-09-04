var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

   if (request.url == '/listings'){
     response.writeHead(200); //200 means ok
       response.write(listingData);
       response.end();
   }
     else {
       response.writeHead(404);
       response.write('Bad gateway error');
       response.end();
     }

};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
   if(err){
     console.log(err);
   }
   else{
  listingData = data;
}
});

var server = http.createServer(requestHandler);
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: localhost://' + port);
  });
