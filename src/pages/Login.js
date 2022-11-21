import "../App.css";

function Login() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="login-icon-container">
        <img className="login-icon" src="" alt="" />
      </div>
      <h1 className="login-heading">user login</h1>
      <div className="login-input">
        <input className="username" type="text" placeholder="username" />
        <input className="password" type="text" placeholder="password" />
      </div>
      <div className="login-options ">
        <input type="checkbox" id="remeber-me" />
        <label htmlFor="remember-me">remember me</label>
        <a href="#" className="forgot-password">
          forgot password?
        </a>
      </div>
      <button className="login-button">login</button>
    </div>
  );
}

export default Login;
