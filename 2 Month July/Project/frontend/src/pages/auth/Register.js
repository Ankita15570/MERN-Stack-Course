import React from 'react'
import instaimg from '../../asets/instalog.png';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const submitForm = async () => {
    try {
      console.log(email, "email")
      console.log(fullName, "fullName")
      console.log(userName, "userName")
      console.log(password, "password")

      const apiResponse = await axios.post("http://localhost:9090/api/auth/register" , {
        email : email,
        fullName : fullName,
        userName : userName,
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
    <div>
      <div className="register-container">
        <div className="box-1">
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
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
              <input type="text"
                className="form-control my-2"
                id="exampleInputfullName"
                placeholder="FullName" 
              onChange={(e) => setFullName(e.target.value)}/>
            </div>

            <div className="form-group">
              <input type="text"
                className="form-control my-2 "
                id="exampleInputuserName"
                placeholder="UserName" 
              onChange={(e) => setUserName(e.target.value)}/>
            </div>

            <div className="form-group">
              <input type="password"
                className="form-control my-2 "
                id="exampleInputPassword1"
                placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <Button varient="primary" onClick={submitForm}>Sign Up</Button>

            <p className="Info-2 mb-2 mt-2">By signing up, you agree to our Terms, Data<br />
              Policy and Cookies Policy.</p>
            <hr />
          </form>
        </div>

        <div className="box-2">
          <div className="box-2Info">
            <p className="text-1">Have an account ? <br /><span className="loginbtn"><b><Link to="/">Log in</Link></b></span></p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Register