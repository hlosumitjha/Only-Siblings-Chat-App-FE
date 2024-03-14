import React from 'react'
import { useState,useEffect } from 'react'
import io from "socket.io-client";

const socket=io.connect("https://only-siblings-chat-app-be.onrender.com/");


const Working = (props) => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const name=props.name;
    const sendChat=(e)=>{
      e.preventDefault();
      socket.emit("chat",{message,name});
      setMessage("");
      console.log("Sending Chat..");
          }
    useEffect(() => {
      socket.on("chat",(payload)=>{
        setChat([...chat,payload])
      })
    })
  return (
    <>
    <div className='details'>
      <h2>Only Siblings</h2>
      <h4>Developed By Sumit Kumar Jha</h4>
    </div>
    <div className='chat_box'>
    {
      chat.map((payload,index)=>{
        return <p key={index}><span className='name'>{payload.name}:</span>{payload.message}</p>;
      })
     }
    </div>
    <div className='chat_control'>
    <div>
      <form onSubmit={sendChat}>
      <textarea id="w3review" name="w3review" rows="3" cols="30" placeholder='Write Your Message Here'
      value={message}
      onChange={(e)=>{
      setMessage(e.target.value)
     }}>
    </textarea>
     <button type="submit">Send</button>
      </form>

     </div>
    </div>
    </>
  )
}

export default Working;
