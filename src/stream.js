const WebSocket = require("ws");

const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

ws.on("open", () => {
  ws.send(
    JSON.stringify({
      type: "subscribe",
      product_ids: ["ETH-USD"],
      channels: ["ticker"],
    })
  );
});

ws.on("message", (data) => {
  console.log(data);
});
