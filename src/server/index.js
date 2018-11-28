const express = require('express');
const socket = require('socket.io');
const data = require('./names');

// various code snippets taken from official documentation sites
// https://socket.io/docs/client-api/

//App setup
const app = express();
const server = app.listen(3001, function() {
  console.log('listening to request on port 3001');
});

app.use(express.static('public'));

//socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log('socket connection to client: from client: ', socket.id);

  setInterval(() => {
    socket.emit('updates', data);
  }, 3000);
});
