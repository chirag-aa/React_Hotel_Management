
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navigationBar.css'
import { useNavigate, Link } from 'react-router-dom';

function NavigationBar(props) {
    const navigate = useNavigate();
    console.log(props.test)
    function goToSignUp(){
        navigate('/signup')
    }


    function goToLogin(){
        navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Food Junction</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
        
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/devinfo">Developer Information</Link>
                        </li>

                    </ul>

                </div>

                <div className='nav-corner'>

                    {
                    props.test === undefined ?<button className='btn btn-primary' onClick={goToSignUp}>Sign Up</button>:
                    
                    props.test===true ?
                    <div className="displayOfLogIn">
                        
                       
                        <h5 id='PersonName'><i class="bi bi-person-check" id='personCheck'></i>Chirag Ambwani</h5>
                        
                        
                        <button className='btn btn-primary' onClick={goToLogin}>Log Out</button>
                    </div>:
                    <div className='displayOfNotLogIn'>
                        <button className='btn btn-primary' onClick={goToLogin}>Log In</button>
                        <button className='btn btn-primary' onClick={goToSignUp}>Sign Up</button>
                    </div>
                  
                    }
                    
                </div>
            </nav>
        </>
    );
}
export default NavigationBar;