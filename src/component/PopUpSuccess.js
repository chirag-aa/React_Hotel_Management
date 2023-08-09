import React from "react";
import greenTickImg from '../images/greenTick.jpg';
import '../styles/popUp.css';

function PopUpSuccess(){
 


    return(
        <>
          <div className="container1">
            
            <img src={greenTickImg} alt="Success Image" className="successImg"></img>
            <h3 className="headingText">Thank You!</h3>
            <h6 className="popupText">Welcome To Food Junction</h6>
            <button className="btn1">OK</button>
          </div>
        </>
    );
}
export default PopUpSuccess;