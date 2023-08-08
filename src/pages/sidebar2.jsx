import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import "./sidebar2.css";


const Sidebar2 = () => {
    const [click,setclick] = useState(false)
    
    const handleclick = ()=>{
     setclick(true)

    }
    useEffect(()=>{

    },[click])
  return (
    <>
    <div  className={`sidebar2 ${click?'hidden':''}`}>
    <h4 onClick={handleclick}>X</h4>
    
  <h4 ><i className="fa-solid fa-user  icon"></i>Profile</h4>
  <h4><i className="fa-solid fa-inbox icon"></i>Inbox</h4>
  <h4><i className="fa-brands fa-rocketchat icon"></i>Chat</h4>
  <h4><i className="fa-solid fa-gear icon"></i>Setting</h4>

  <h4><i className="fas fa-sign-out-alt icon"></i>Log out</h4>
  </div>
    
    </>
  )
}

export default Sidebar2