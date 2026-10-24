
function Login() {
  return (

      <div className="body body-login div-login">
      <div className="form-floating div-main-input">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">
          Email address
        </label>
      </div>

      <div className="form-floating ">
        <input
      
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">
          Password
        </label>
      </div>
            <div className="form-floating">
        <input
      
          className="form-control"
          id="confrimPassword"
          placeholder="Password"
        />
        <label htmlFor="confrimPassword">
         Confrim Password
        </label>
      </div>
    </div>
  );
}

export default Login;