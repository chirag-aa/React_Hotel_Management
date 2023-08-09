import { useState,useEffect,useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import image from '../images/login2.webp';
import { useNavigate,Link } from "react-router-dom";
import '../styles/login.css'
import NavigationBar from "./Navigationbar";
import LoginContext from './../context/loginDetails/LoginContext';
function Login() {

  const navigate = useNavigate();
  
  const loginContext = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState();
  const [response,setresponse]= useState('');

  

  const handleLogin = (e) => {

    e.preventDefault();
    const response = fetch('http://localhost:4000/food/login', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });

    response.then((data) => {
      setStatus(data.status);
      if (data.status === 200) {

        loginContext.makeUserLogin();
        
        console.log(loginContext.isLoggedIn + "True or false");
        
          navigate('/tablelist');

        const textData = data.text();

        textData.then(resp => {
         setresponse(resp);
        }).catch(err => {
          console.log(err);
        })
      }
      else {
        setresponse('Invalid Username or Password');
      }
    }).catch(err => setresponse(err));
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)

  }
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="loginComponent">

        <div className="formClass">

          <form className="form">
            <div className="heading">
              <h1>Login</h1>
            </div>
            <div className="form-group">

            <i class="bi bi-envelope"></i>

              <label htmlFor="exampleInputEmail1">Email Address</label>
              
              <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => handleEmailChange(e)} aria-describedby="emailHelp" placeholder="Enter email" />
              
            </div>
            <div className="form-group">
            <i class="bi bi-lock"></i>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" onChange={(e) => handlePasswordChange(e)} value={password} id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">

              <label className="form-check-label" htmlFor="exampleCheck1">Dont have an account</label>
              <Link  className="signupRedirect" id="exampleCheck1" to="/signup"> SignUp?</Link>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => handleLogin(e)}>Login</button>
            <div id="isAuthorized">
              {
                status===403 ? 
                <h3>Invalid UseName or Password</h3>
                : null
                
              }
            </div>
          </form>
        </div>

        <div className="loginImage">

          <img src={image} className="loginImg" alt="LoginImage"></img>
        </div>

      </div>
    </>
  );
}


export default Login