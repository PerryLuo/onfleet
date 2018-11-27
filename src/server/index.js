const express = require('express');
const socket = require('socket.io');
const data = require('./names');

//App setup
const app = express();
const server = app.listen(3001, function() {
  console.log('listening to request on port 3001');
});

//static file
app.use(express.static('public'));

//socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log('socket connection to client: from client: ', socket.id);

  setInterval(() => {
    socket.emit('updates', data);
  }, 3000);
});
