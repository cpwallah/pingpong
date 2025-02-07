"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    // try phase
    // setInterval(() => {
    //     socket.send("number is "+Math.random());
    // }, 5000);
    // socket.send("hello");
    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
