import NavigationBar from "./Navigationbar";
import React, { useEffect, useState, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import context from "../context/orderDetails/OrderDetailsContext";
import LoginContext from './../context/loginDetails/LoginContext';

function OrderDetails() {
    const tableNameData = useContext(context)
    const loginContext = useContext(LoginContext);
    const[apiResponse,setApiResponse]= useState([]);
    let[totalPrice,setTotalPrice]=useState(0);
    let[countIncrement,setCountIncrement]=useState(0);
    let[countDecrement,setCountDecrement]=useState(0);
    let totalSum = 0;

    useEffect(() => {
         
         totalSum = 0
         let a = fetch('http://localhost:4000/food/getAll')
        a.then(response => {
            console.log(response.status)
            return response.json();
        }).then(data => {
            console.log(data)
            setApiResponse(data);
        }).catch(err => {
            console.log(err)
        })

        apiResponse.forEach(data=>{
           totalSum = totalSum + (data.foodPrice * data.foodQuantity);
        });

        setTotalPrice(totalSum.toFixed(0));
    })
    

    const increaseQuantity = (e,foodId)=>{
       e.preventDefault();
       setCountIncrement(countIncrement++);
       const incrementFoodQuantity = fetch(`http://localhost:4000/food/incrementQuantity/${foodId}`);
       incrementFoodQuantity.then((apiResponse)=>{
        if(apiResponse.status===200){
            const body = apiResponse.text()

            body.then(data=>{
                console.log(data);
            }).catch(err=>console.log(err));
        }
       }).catch(err=>console.log(err));
      
    }
    const decreaseQuantity = (e,foodId)=>{
        e.preventDefault();
        setCountDecrement(countDecrement++);
       const incrementFoodQuantity = fetch(`http://localhost:4000/food/decrementQuantity/${foodId}`);
       incrementFoodQuantity.then((apiResponse)=>{
        if(apiResponse.status===200){
            const body = apiResponse.text()

            body.then(data=>{
                console.log(data);
            }).catch(err=>console.log(err));
        }
        else{
            console.log("Api status is different")
        }
       }).catch(err=>console.log(err));
    }
    return (
        <>
            <NavigationBar test={loginContext.isLoggedIn}></NavigationBar>
            <div>
                <h4>Table Number: {tableNameData.tableName}</h4>

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Item Id</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Price</th>
                                <th scope="col">Item Quantity</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Change Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            { apiResponse.map(orderList =>{
                              
                              return(
                                <> 
                                 <tr>
                                <th scope="row">{orderList.foodId}</th>
                                <td>{orderList.foodName}</td>
                                <td>{orderList.foodPrice}</td>
                                <td>{orderList.foodQuantity}</td>
                                <td>{(orderList.foodPrice * orderList.foodQuantity).toFixed(0)}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={(e) =>increaseQuantity(e,orderList.foodId)}>Add +</button>
                                    <button className="btn btn-primary" onClick={(e) =>decreaseQuantity(e,orderList.foodId)}>Remove -</button>
                                </td>
                            </tr>

                             
                                </>
                            )
                           
                        })           
                    }
                            
                        </tbody>
                    </table>
                </div>
                <h1>Billing Amount = {totalPrice} Rupees</h1>
            </div>
        </>
    );
}
export default OrderDetails;