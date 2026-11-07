import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";


function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  function handlelogin() {
    if(password === "" || email === ""){
    seterror("Please fill all fields");
    }
    else{
        seterror("");
    }

  }
  function emailvalue(e) {
    setemail(e.target.value);
    console.log(email);
  }
  return (
    <div className="div-login">
      <div className="items-div">
        <div>
          <p className="text">Email</p>
          <input
            className="input"
            type="text"
            placeholder="test@gmail.com"
            value={email}
            onChange={emailvalue}
          />
        </div>
        <div>
          <p className="text">Password</p>
          <input
            type="text"
            className="input"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
      </div>
      <button className="button-login" onClick={handlelogin}>
        Login
      </button>
      <div className="links-div">
        <Link className="all-link" to="/signin"><p className="link-text">Sign in</p></Link>
        <p className="link-text">Forget password</p>
      </div>
      <div><p  className="error-text">{error}</p></div>
    </div>
  );
}

export default Login;
