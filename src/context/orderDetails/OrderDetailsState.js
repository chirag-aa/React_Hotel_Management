import React from "react";
import OrderDetailsContext from './OrderDetailsContext.js'
import { useState } from "react";
const OrderDetailsState = (props)=>{
    let temperaryTableName="some table"
    let[tableName,setTableName] = useState(temperaryTableName);
    const update = (tableName)=>{
       setTableName(tableName);
    }
    return (
       <OrderDetailsContext.Provider value={{tableName,update}}>
         {props.children}
       </OrderDetailsContext.Provider>
    );
}
export default OrderDetailsState