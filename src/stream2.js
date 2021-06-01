const httpServer = require("http").createServer();

const io = require("socket.io")(httpServer);

const socket = io("wss://ws-feed.pro.coinbase.com");
io.on("connection", (socket) => {
  socket.
});

httpServer.listen(3000);
