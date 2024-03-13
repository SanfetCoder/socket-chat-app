const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
// socket.io
const { Server } = require("socket.io");
// Mount socket.io server to HTTP server
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  //   disconnect event
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  //   chat message event
  socket.on("chat message", (msg)=>{
    console.log("message: " + msg)
  })
});

server.listen(3000, () => {
  console.log("listening on :3000");
});
