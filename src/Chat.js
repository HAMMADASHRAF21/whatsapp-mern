import React, { useState,useEffect } from 'react';
import './Chat.css'
import {Avatar,IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
function Chat({messages}) {
const [input,setInput] =useState("");
  const [seed,setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() *5000))
}, []);


const sendMessage = async(e)=>
{
e.preventDefault();
await axios.post('/messages/new', {
message:input,
name:"HAMMAD",
timestamp: 'now',
received: false


});
setInput("");
}


  return (
    <div className="chat">

<div className='chat__header'>
<Avatar src={`https://avatars.diceb
ear.com/api/male/${seed}.svg`} />
<div className="chat__headerInfo">  
<h3>ROOM NAME</h3>
<p>last seen at...</p>
</div>
<div className="chat__headerRight">
<IconButton>  <SearchIcon /> </IconButton>
      <IconButton>  <AttachFileIcon/> </IconButton>
      <IconButton>   <MoreVertIcon/> </IconButton>
  </div>

</div>
<div className='chat__body'>
  {messages.map((message) =>
  (
    <p className={`chat__message ${message.received && "chat__reciever"}`}>
    <span className="chat__name">
{message.name}
    </span>
 {message.message}   
 <span className="chat__timestamp">
  {message.timestamp}
</span>

</p>
  ))};
  
<p className="chat__message chat__reciever">
    <span className="chat__name">
hammad
    </span>
    
    my message
<span className="chat__timestamp">
  {new Date().toUTCString()}
</span></p></div>

<div className='chat__footer'>
  <InsertEmoticonIcon/>
  <form>
<input value={input}
onChange={(e)=> setInput(e.target.value)}
  placeholder="Type a message"
  type="text"
  />
<button onClick={sendMessage} type="submit">Send a message </button>
  </form>
  <MicIcon/>
</div>
    </div>
  );
}

export default Chat;
