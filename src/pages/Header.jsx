import React, { useEffect, useState } from "react";
import "./header.css";
import auth from "./firebase";
import { signOut } from "firebase/auth";



const Header = () => {
    const userEmail = JSON.parse(localStorage.getItem('Email'))
 const [getEmail,setGetEmail] = useState(userEmail)
 
 useEffect(()=>{
 },[getEmail])
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
          <div className="col-md-12 text-end header">
            <form onSubmit={handleLogOut}>
           {getEmail&&<span style={{paddingRight:'20px'}}>{getEmail}</span>}

            <button
              type="submit"
              className="btn btn-outline-primary me-2 "
      
            >
              Log-out
            </button>
            </form>
          </div>
    </>
  );
};

export default Header;
