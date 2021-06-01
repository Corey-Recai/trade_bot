const WebSocket = require("ws");

const ws = new WebSocket("wss://stream.binance.us:9443/ws");

ws.on("open", () => {
    ws.send(
        JSON.stringify(
            {
                "method": "SUBSCRIBE",
                "params": [
                    "btcusdt@aggTrade",
                    "btcusdt@depth"
                ],
                "id": 1
            }
        )
    );
});


ws.on("message", (data) => {
    console.log(data);
});

// https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md#detailed-stream-information




