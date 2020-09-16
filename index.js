const fs = require('fs');
const http = require('http'); 
const express = require('express');

http.createServer(function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  }); 
  
  var url = req.url;

  if (url === "/create-thread/") {
    const create_thread_file = __dirname + '/static/create_thread.html';
    const create_thread = fs.readFileSync(create_thread_file, 'utf8');

    res.write(create_thread);
    res.end();
  }

  else {
    const main_file = __dirname + '/static/index.html';
    const main = fs.readFileSync(main_file, 'utf8');

    res.write(main);
    res.end();
  }
}).listen(3000, function () {
  console.log("The WarRoom has opened!");
});