#!/usr/bin/env node
var http = require('http');
var sys = require('sys');

// Send a log message to be included in CouchDB's
// log files.

var log = function(mesg) {
  console.log(JSON.stringify(["log", mesg]));
}

// The Node.js example HTTP server

var server = http.createServer(function (req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('[passport] daemon is up\n');
  log(req.method + " " + req.url);
})

// We use stdin in a couple ways. First, we
// listen for data that will be the requested
// port information. We also listen for it
// to close which indicates that CouchDB has
// exited and that means its time for us to
// exit as well.

var stdin = process.openStdin();

stdin.on('data', function(d) {
  var port = parseInt(JSON.parse(d));
  server.listen(port);
  log("listening on port " + port);
});

stdin.on('end', function () {
  process.exit(0);
});

// Send the request for the port to listen on.
// needs to be set in local.ini
console.log(JSON.stringify(["get", "passport", "port"]));
