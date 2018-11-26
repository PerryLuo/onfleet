// //create http server
// var app = require('http').createServer();

// //connect socket.io to http server
// var io = require('socket.io')(app);

// //creating port on enviroment or 3001;
// const PORT = process.env.PORT || 3001;

// io.on('connection', (socket) => {
//   console.log('socket connection on ' + socket.id);
// });

// app.listen(PORT, () => {
//   console.log('listening on port ' + PORT);
// });

// module.exports.io;

const express = require('express');
const socket = require('socket.io');

const names = require('./names');

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
    socket.emit('updates', names);
  }, 1000);
});
