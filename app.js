const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) =>  {
   console.log('User Connected...');

   socket.on('message', (msg) => {
      console.log(msg);
      socket.emit("message", "hello from server");
   });

   socket.on('disconnect', () => {
      console.log('User Disconnected...');
   });
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});