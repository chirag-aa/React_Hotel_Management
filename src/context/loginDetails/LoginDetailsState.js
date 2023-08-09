import React from "react"
import { useState } from "react";
import LoginContext from "./LoginContext";
const LoginDetails =(props)=>{
    
    const[isLoggedIn,setisLoggedIn]=useState(false);
    const[jwtToken,setJwtToken] = useState('');

    const updateJwtToken = ()=>{
        setJwtToken("!@#$%^&*(");
    }
     const makeUserLogin = ()=>{
        setisLoggedIn(true);
     }

     const makeUserLogout = (props)=>{
        setisLoggedIn(false);
     }
     return(
       <>
         <LoginContext.Provider value={{isLoggedIn,makeUserLogin,makeUserLogout,updateJwtToken,jwtToken}}>
            {props.children}
         </LoginContext.Provider>
       </>
     );
}

export default LoginDetails;