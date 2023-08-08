import React,{useContext} from 'react'
import "./header.css";
import Store from './context';

const Sidebar = () => {

  const {toggle1,handleToggle1} = useContext(Store)
  
  return (
    <>
    

<div className={`sidebar ${toggle1?'collapsed':''}`}>
<i className='fa-solid fa-bars' onClick={handleToggle1}></i>
  <h4 ><i className="fa-solid fa-user  icon"></i>Profile</h4>
  <h4><i className="fa-solid fa-inbox icon"></i>Inbox</h4>
  <h4><i className="fa-brands fa-rocketchat icon"></i>Chat</h4>
  <h4><i className="fa-solid fa-gear icon"></i>Setting</h4>

  <h4><i className="fas fa-sign-out-alt icon"></i>Log out</h4>
  </div>
    
    </>
  )
}

export default Sidebar;