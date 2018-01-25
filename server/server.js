const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
//Web sockets server
var io = socketIO(server);

//Config express static middleware
app.use(express.static(publicPath));

//Lets you register an event listener we can listen for
//a specific event and do something when that event happens
//listen for a connection
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
});

//Bind the app(server) to a port in the machine
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
