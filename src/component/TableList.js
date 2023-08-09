import '../styles/tableList.css'
import { useEffect } from 'react';

import { useState } from 'react';
import NavigationBar from './Navigationbar';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import context from './../context/orderDetails/OrderDetailsContext';
import LoginContext from './../context/loginDetails/LoginContext';

function TableList() {
  let contexData = useContext(context);
  let loginContext = useContext(LoginContext);

  const navigate = useNavigate();

  const [tableListData, setTableListData] = useState([]);
  const [isUserLoggegIn,setUserLoggedIn]=useState(false);



  let imageUrl = "https://i.redd.it/f69km2tizqx11.jpg";


  useEffect(() => {

    let apiResponse = fetch('http://localhost:4000/food/tables');

    apiResponse.then(data => {
      if (data.status === 200) {
        let jsonResponse = data.json();
        jsonResponse.then(tableListApi => {
          setTableListData(tableListApi)
        }).catch(err => console.log(err))
      }
    }).catch(err => console.log(err));

    if(loginContext.isLoggedIn===true){
      setUserLoggedIn(true);
    }
  }, [])

  const handleorderDetails = (tableName) => {

    // context api ka use kr ke table name set up kro fir table name se fetch krna api orderDetails me
    contexData.update(tableName);

    if(loginContext.isLoggedIn===true){
      navigate('/orderdetails');
    }

  }
  return (
    <>
      <NavigationBar test = {loginContext.isLoggedIn}></NavigationBar>

      {!isUserLoggegIn?
      <div className='alert alert-danger'>
      <h3 className='SignInMessage'>Please Sign In To Access the Data</h3></div> : null
      }
      
      <div className='gridDisplay'>
       
        {
          tableListData.map((tableData) => {
            return (
              <div class="card">
                <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Table Number: {tableData.tableName}</h5>
                  <p class="card-text">{JSON.stringify(tableData.foodOrdered)}</p>
                  <a href="#" class="btn btn-primary" onClick={(e) => handleorderDetails(tableData.tableName)}>Order Details</a>
                </div>
              </div>
            );
          })

        }
      </div>
    </>
  );
}
export default TableList