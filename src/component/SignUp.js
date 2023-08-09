import { useState,useEffect } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
   

     const navigateTo = useNavigate();
    const[inputEmail,setInputEmail]=useState('');
    const[isEmailPass,setIsEmailPass]=useState(false);
    const[inputPassword,setInputPassword]=useState('');
    const[isinputPasswordPass,setisinputPasswordPass]=useState(false);
    const[confirmInputPassword,setConfirmInputPassword]=useState('');
    const[confirmPasswordPass,setConfirmPasswordPass]=useState('');

    const[passwordWrongMessage,setPasswordWrongMessage] = useState('');
    const[emailWrongMessage, setEmailWrongMessage] = useState('');

    const[btnDisabled,setbtnDisabled] = useState(true);
    
 
    const handleConfirminputPassword = (e)=>{
        setConfirmInputPassword(e.target.value);
    }
    const handleEmailChange =(e)=>{
        setInputEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
       setInputPassword(e.target.value);
    }

    function emailChecksPass(){
        if(inputEmail.length<=0){
            return false;
        }
        return true;
    }

    function passwordChecksPass(){
        if(inputPassword.length<=0 || inputPassword.length<6){
            return false;
        }
        return true;
    }

    const onSubmit = (e)=>{
         e.preventDefault();

         if(emailChecksPass()===false){
            // email length 0 
            // domain not ending with .com 
            // domain allowed are not proper
            // @ is missing
            // contains bad characters or capital characters
            setIsEmailPass(false);
            setEmailWrongMessage('Please Enter a valid email');
         }
         if(passwordChecksPass()===false){
            // pass length 0 
            // password contains substring of email
            // no special characters
            // pass length <6
            // contains bad characters or capital characters
            setisinputPasswordPass(false);
            setPasswordWrongMessage('Please Enter a valid password');
         }

         if(passwordChecksPass()===true && emailChecksPass()===true){
            setEmailWrongMessage('');
            setEmailWrongMessage('');
            setisinputPasswordPass(true);
            setIsEmailPass(true);
            navigateTo('/')
         }
        
         if(passwordChecksPass()===false && emailChecksPass()===true){
            setEmailWrongMessage('');
            setPasswordWrongMessage('Please Enter a valid password');
            setisinputPasswordPass(false);
            setIsEmailPass(true);
         }

          
         if(passwordChecksPass()===true && emailChecksPass()===false){
            setEmailWrongMessage('Please Enter Valid Email');
            setPasswordWrongMessage('');
            setisinputPasswordPass(true);
            setIsEmailPass(false);
         }
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email address</label>
                    <input type="email" className="form-control" value={inputEmail} onChange={(e)=>handleEmailChange(e)} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    {!isEmailPass ? <p style={{"color":"red"}}>{emailWrongMessage}</p>:null}
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={inputPassword} onChange={(e)=>handlePasswordChange(e)} id="exampleInputPassword1" placeholder="Password" />
                    {!isinputPasswordPass?<p style={{"color":"red"}}>{passwordWrongMessage}</p>:null}
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={confirmInputPassword} onChange={(e)=>handleConfirminputPassword(e)} />
                </div>

                <div className="form-group">
                    <label htmlFor="restoName">Shop Or Restourant Name</label>
                    <input type="text" className="form-control" id="restoName" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="anualRev">Anual Revenue</label>
                    <input type="text" className="form-control" id="anualRev" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="gstNumber">GST Number</label>
                    <input type="text" className="form-control" id="gstNumber" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="ownerName">Owner Name</label>
                    <input type="text" className="form-control" id="ownerName" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <button type="submit" class="btn btn-primary"  onClick={(e)=>onSubmit(e)}>Submit</button>
            </form>
        </>
    );
}
export default SignUp;