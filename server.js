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
    timeStamp: Date.now(),
    product: "ZBwfnbuzdI"
  };
}

let Boris = new CreateNewSend("asdfghhjhg", "test comment", "Boris");
let Igor = new CreateNewSend("wrtyugghrf", "test comment 2", "Igor");
let product = {
  id: "ZBwfnbuzdI",
  img: "https://pix-media.priceonomics-media.com/blog/921/cicero_gradient.png",
  name: "Ipsum dolor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

let commentsCollection = [];
commentsCollection.push(Boris);
commentsCollection.push(Igor);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("New client connected");
  io.sockets.emit("get product", JSON.stringify(product));
  io.sockets.emit("get messages", JSON.stringify(commentsCollection));

  socket.on("message send", message => {
    console.log("New message: ", message);
    commentsCollection.push(JSON.parse(message));
    io.sockets.emit("get messages", JSON.stringify(commentsCollection));
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
