import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import TableList from "./component/TableList";
import SignUp from "./component/SignUp";
import OrderDetails from "./component/OrderDetails";
import NoPage from "./component/NoPage";
import OrderDetailsState from "./context/orderDetails/OrderDetailsState";
import LoginDetails from "./context/loginDetails/LoginDetailsState";
import DevInfo from "./component/DevInfo";
import About from "./component/About";
import Home from "./component/Home";
import PopUpSuccess from "./component/PopUpSuccess";
import PopUpError from "./component/PopUpError";

function App() {
  return (
    <LoginDetails>
      <OrderDetailsState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/tablelist" element={<TableList />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/orderdetails" element={<OrderDetails />}></Route>
            <Route path="*" element={<NoPage></NoPage>}></Route>
            <Route path="/devinfo" element={<DevInfo></DevInfo>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </OrderDetailsState>
    </LoginDetails>
  );
}

export default App;
