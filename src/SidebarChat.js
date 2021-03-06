import React,{useEffect,useState} from 'react'
import './SideBarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat({addNewChat}) {
const [seed,setSeed] = useState('')
useEffect(() => {
    setSeed(Math.floor(Math.random() *5000))
}, []);

const createChat = () =>{

const roomName = prompt("Please enter name for chat")
if (roomName) {
//do some stuff...

}

};


    return !addNewChat ? (
        <div className="sidebarChat">
<Avatar src={`https://avatars.diceb
ear.com/api/male/${seed}.svg`} />
<div className="sidebarChat__info">
    <h2>
        Roome name
        </h2>
        <p>last msg...</p>
        </div>   
        </div>
    ) : (
<div onClick={createChat} className="sidebarChat">
    <h2>ADD new chat</h2>
</div>

    ) 
}

export default SidebarChat
