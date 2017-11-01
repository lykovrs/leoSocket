const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

function CreateNewSend(id, text, name) {
  return {
    id,
    text,
    name,
    timeStamp: +Date.now()
  };
}

let Boris = new CreateNewSend("asdfghhjhg", "test comment", "Boris");
let Igor = new CreateNewSend("wrtyugghrf", "test comment 2", "Igor");

let commentsCollection = [];
commentsCollection.push(Boris, Igor);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("New client connected");
  io.sockets.emit("messages init", JSON.stringify(commentsCollection));

  // socket.on("change message", message => {
  //   console.log("New message: ", message);
  //   io.sockets.emit("change message", JSON.stringify(commentsCollection));
  // });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
