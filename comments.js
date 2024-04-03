// Create web server
// Load the module using ES module syntax
import http from 'http';
// Create the server
http.createServer(function (_, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Comments Module"
    response.end('Comments Module\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://localhost:8081');
