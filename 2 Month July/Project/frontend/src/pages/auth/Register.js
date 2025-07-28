import React from 'react';
import './CSS/register.css';
import instaLogo from '../../asets/instalog.png'; 
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="insta-container">
           
            <div className="insta-right">
                <div className="register-box my-2">
                    <img className="logo" src={instaLogo} alt="Instagram Logo" />
                    <p className="heading">Sign up to see photos and videos from your friends.</p>
                    <form>
                        <input type="text" className="one" placeholder="Mobile Number or Email" required />
                        <input type="text " className="one"  placeholder="Full Name" required />
                        <input type="text" className="one" placeholder="Username" required />
                        <input type="password"className="one" placeholder="Password" required /> </form>

                        <button type="submit" className="btn btn-primary  mt-2 btn"><Link to="/birthday">Sign Up</Link></button>

                        

                        <p className="text-center mt-5">
                            Have an account? <b><Link to="/">Log in</Link></b>
                        </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;