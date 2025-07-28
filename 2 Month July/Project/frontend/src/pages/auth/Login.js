import React from 'react';
import './CSS/style.css';
import loginpageimg from "./../../asets/loginpage.img.png";
import googlelogo from "./../../asets/googlelogo.img.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page text-center mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center mt-7">
                        <img src={loginpageimg} alt="" className="w-100" />
                    </div>
                    
                        <div className="col-md-6  text-center mt-5">
                            <div className="box">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" className="instagram-icon mb-3 w-20px" />

                            <form className="login-form ">
                                <div className="form-group ">
                                    <input type="email"
                                        className="form-control my-0.75 text-center"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Phone Number Or Email" />
                                </div>

                                <div class="form-group">
                                    <input type="password"
                                        className="form-control my-2 "
                                        id="exampleInputPassword1"
                                        placeholder="Password" />
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 login-btn">Login</button>
                                <hr />
                                <div className="text-center">
                                    <img src={googlelogo} alt="" className=" logo-google " />
                                </div>

                                <p className="text-center mt-3">Forget Password?</p>
                                <p className="text-center mt-3 ">Don't have an account? <span className="signup">
                                    <b><Link to="/register">Sign up</Link></b></span></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Login;
