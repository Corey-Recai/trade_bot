const WebSocket = require("ws");

const ws = new WebSocket("wss://stream.binance.us:9443/ws");

ws.on("open", () => {
    ws.send(
        JSON.stringify(
            {
                "method": "SUBSCRIBE",
                "params": [
                    "btcusdt@kline_5m",
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

// wss://stream.binance.us:9443/ws/btcusdt@kline_5m

// Writes to txt file from command line
// wscat -c wss://stream.binance.us:9443/ws/btcusdt@kline_5m | tee dataset.txt
