import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./userlogin.css"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [name, setuser] = useState("")
  const [password, setpassword] = useState("");

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      PassWord: password
    }
    axios.post("http://15.207.88.22/Moi/create", data)

      .then((result) => {
        if (result.data) {
          toast("🦄 Userlogin Created Successfully", {
          });
          navigate("/dash")
        }
      })
      .catch((err) => {
        toast.error('🦄  UserName is Already Existed Please Try Again !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  const loginNav = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      PassWord: password
    }
    axios.post("http://localhost:5000/Moi/login", data)

      .then((result) => {
        console.log(result);
        toast("🦄 Userlogin Successfully!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",

        });
        navigate("/dash")
      })
      .catch((err) => {
        console.log(err);
        toast.error('🦄 UserName or Password Wrong!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container box1">
        <h2 class="login">Sign In</h2><br />
        <form>
          <div className="form-group input-container1">
            <div class="input-container">
              <input type="text" className="form-control small-input center-placeholder" id="username" placeholder="username" onChange={(e) => { setuser(e.target.value) }} value={name} />
            </div><br></br>
            <div className="form-group input-container1">
              <input type="password" className="form-control small-input center-placeholder" id="password" placeholder="password" onChange={(e) => { setpassword(e.target.value) }} value={password} /><br />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btnlogin" onClick={(e) => loginNav(e)} value="login" >Login</button><br></br>
          <button class="createnew" onClick={(e) => handleSubmit(e)} value="text" >Create new account</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
