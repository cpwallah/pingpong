import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 const [socket,setsocket]=useState();
 const inputref=useRef();
function sendmessage(){
if(!socket){
  return;
}
const message=inputref.current.value;
socket.send(message);

}
useEffect(()=>{
  const ws=new WebSocket("ws://localhost:8080");
  setsocket(ws);
  ws.onmessage=(ev)=>{
    alert(ev.data);
  }
},[]);
  return (
    <div>
      <input ref={inputref} type="text" placeholder='message...' />
      <button onClick={sendmessage}>button</button>
    </div>
  )
}

export default App
