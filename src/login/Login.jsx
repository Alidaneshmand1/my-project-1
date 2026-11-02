
function Login() {
  return (

   <div>
    <div>
      <p className="text">Email</p>
      <input className="input" type="text" placeholder="test@gmail.com" />
    </div>
        <div>
      <p className="text">Password</p>
      <input type="text"  className="input"/>
    </div>
    <button>Login</button>
   </div>   
  )
}

export default Login;