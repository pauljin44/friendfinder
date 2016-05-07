 var http = require('http'),
  url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 3000;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {
  var url_parts = url.parse(req.url);
console.log(url_parts);


  switch (url_parts.pathname) {
    case '/home':
      display_root(url_parts.pathname, req, res);
      break;
    case '/survey':
      display_portfolio(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_root(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += "<a href='/survey'>Survey</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_portfolio(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>Survey</h1>';
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}