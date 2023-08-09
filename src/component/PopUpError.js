import React from "react";
import crossImg from '../images/cross.png';
import '../styles/popUpError.css';

function PopUpError(){
 
    return(
        <>
          <div className="container1">
            
            <img src={crossImg} alt="Success Image" className="successImg"></img>
            <h3 className="headingText">Faild to Authenticate</h3>
            <h6 className="popupText">Please Try Again</h6>
            <button className="btn1">Go Back</button>
          </div>
        </>
    );
}
export default PopUpError;