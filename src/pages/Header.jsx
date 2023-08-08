import React, { useEffect, useState } from "react";
import "./header.css";
import auth from "./firebase";
import { signOut } from "firebase/auth";
import Sidebar from "./sidebar";
import Store from "./context";
import Sidebar2 from "./sidebar2";


const Header = () => {
    const userEmail = JSON.parse(localStorage.getItem('Email'))
 const [getEmail,setGetEmail] = useState(userEmail)
const [bars,setBars] = useState(false);

useEffect(()=>{
  console.log(bars,'bars')
},[bars])
 useEffect(()=>{
 },[getEmail,bars])
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setGetEmail("");
        localStorage.removeItem("Email");
        window.location.reload();

      })
      .catch((error) => {
      });
  };


  return (
    <>

   <Sidebar/>
   <i className='fa-solid fa-bars' onClick={()=>setBars(prev=>!prev)} ></i>
   {bars?<Sidebar2/>:''}

          <div className="col-md-12 text-end header" >

            <form onSubmit={handleLogOut}>
           {getEmail&&<span style={{paddingRight:'20px',color:'blue'}}>{getEmail}</span>}

            <button
              type="submit"
              className="btn btn-outline-primary me-2 "
      
            >
              Log-out
            </button>
            </form>
          </div>
<br/>
<br/>

    </>
  );
};

export default Header;
