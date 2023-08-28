import Express from "express";
import * as http from "http";
import * as socketio from "socket.io";

const app = Express();
const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: '*'
  }
});

const PORT = 3001

io.on("connection", (socket) => {
  console.log('socketio connected.', socket.id)
  // get message
  socket.on('message', (msg) => {
    // send message
    socket.broadcast.emit('message', msg)
  })
});

server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});