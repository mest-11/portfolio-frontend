

const Signin = () => {
  return (
  

<div className="flex flex-col items-center">
  <div id="login-register">

    <div id="box">
      <label for="sign-up-toggle">Sign up</label>
      <input type="checkbox" id="sign-up-toggle"/>
      <label for="login-toggle">Login</label>
      <input type="checkbox" id="login-toggle"/>
      <div id="login-panel">
        <form action="POST">
          <input type="text" placeholder="First Name "  className="outline-none"/ >
          <input type="text" placeholder="Last Name"  className="outline-none"/>
          <input type="email" placeholder="Email"  className="outline-none"/>
          <input type="password" placeholder="Password"/>
        </form>
        <button ><p>Sign up</p><p>Login</p></button>
      </div>
    </div>
  </div>
</div>
   
  
  )
}

export default Signin