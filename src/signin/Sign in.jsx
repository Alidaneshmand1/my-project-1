import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
function Signin() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  function handlebutton() {
    if (
      Name === "" ||
      Email === "" ||
      Password === "" ||
      ConfirmPassword === ""
    ) {
      alert("Please fill all fields.");
    }
    if (!(Password === ConfirmPassword)) {
      alert("Password does not match ConfirmPassword.");
    }
  }

  return (
    <div className="div-login">
      <div className="items-div">
        <div>
          <p className="textsignin">Name</p>
          <input
            className="input"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p className="textsignin">Email</p>
          <input
            className="input"
            type="text"
            placeholder="test@gmail.com"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="textsignin">Password</p>
          <input
            className="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="textsignin">confirm Password</p>
          <input
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <button className="button-login" onClick={handlebutton}>
        Sign in
      </button>
      <div className="links-div">
        <Link className="all-link" to="/login">
          {" "}
          <p className="link-textlogin">Login</p>
        </Link>
      </div>
    </div>
  );
}
export default Signin;
