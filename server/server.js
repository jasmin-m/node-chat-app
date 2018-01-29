const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
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
io.on('connection', function (socket) {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server.');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', function () {
    console.log('Client disconnected');
  })
});

//Bind the app(server) to a port in the machine
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
