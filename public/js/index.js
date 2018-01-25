//IO initiates the request from the client to the server to open up a
//web socket and keep that connect open
var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Jasmin',
    text: 'Hey. This is Jasmin.'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
