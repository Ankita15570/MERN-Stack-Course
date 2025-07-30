import React from 'react'
import instaimg from '../../asets/instalog.png';
import loginimg from "./../../asets/loginpage.img.png";
import googlelogo from "./../../asets/googlelogo.img.png";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Login = () => {
     const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitLogin = async () => {
    try {
      console.log(email, "email")
      console.log(password, "password")

      const apiResponse = await axios.post("http://localhost:9090/api/auth/login" , {
        email : email,
        password : password,
      }
    );
    if(apiResponse.data.token){
      localStorage.setItem('userToken', apiResponse.data.token);
    }
    } catch (error) {
      console.log(error)
    }
  };
    return (
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <img src={loginimg} alt="" className="w-78" />
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={instaimg} alt="" className="Instagram-icon mb-4" />

                        <form className="login-form">
                            <div className="form-group">
                                <input type="email"
                                    className="form-control my-2 w-100"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email" 
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input type="password"
                                    className="form-control  my-2 w-100"
                                    id="exampleInputPassword1"
                                    placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <Button varient="primary" onClick={submitLogin }>Login</Button>
                            <hr />
                            <div className="text-center">
                                <img src={googlelogo} alt="" className=" google-logo"/>
                            </div>

                            <p className="text-center mt-5 test">Forgot Possword?</p>
                            <p className="text-center text1">Don't have an account? <span className="bold"><u> <Link to="/register"><b>Sign up</b></Link></u></span></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login