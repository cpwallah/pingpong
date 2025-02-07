import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080});
wss.on("connection",function(socket){
    console.log("user connected");
    // try phase
    // setInterval(() => {
    //     socket.send("number is "+Math.random());
    // }, 5000);
    // socket.send("hello");
    socket.on("message",(e)=>{
        if(e.toString()=="ping"){
            socket.send("pong")
        }
    })
})