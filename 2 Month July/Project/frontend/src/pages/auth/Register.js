
import React, { useState } from "react";
import instaimg from '../../asets/instalog.png';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Register = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const submitForm = async () => {
    try {
      console.log(email, "email")
      console.log(fullName, "fullName")
      console.log(userName, "userName")
      console.log(password, "password")

      const apiResponse = await axios.post("http://localhost:9090/api/auth/register",
        {
          email: email,
          fullName: fullName,
          userName: userName,
          password: password,
        }
      );
      console.log(apiResponse, "apiResponse ==>")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="register-container">
        < div className="box-1">
          <div className="box-1-logo">
            <img src={instaimg} alt="" className="Instagram-logo" />
            <p className="Info">Sign up to see photos and  videos<br /> from your friends.
            </p>

            <button type="submit" className="btn btn-primary google-loginbtn mb-2">Log in with google</button>
          </div>

          <form className="login-form">
            <div className="form-group">
              <input type="email"
                className="form-control my-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <input type="text"
                className="form-control my-2"
                id="exampleInputfullName"
                placeholder="FullName"
                onChange={(e) => setFullName(e.target.value)} />
            </div>

            <div className="form-group">
              <input type="text"
                className="form-control my-2 "
                id="exampleInputuserName"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className="form-group">
              <input type="password"
                className="form-control my-2 "
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <Button varient="primary" onClick={submitForm}>Sign Up</Button>

            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s"
                alt=""
                className="logo-google"
              />
            </div>
            <br />
            <button>Log in with Facebook</button>
            <div className="box-2">
              <p className="text-center mt-5">Forgot Password</p>
              <p className="text-center">
                Have an account?
                <b>
                  <Link to="/"> Login </Link>
                </b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Register