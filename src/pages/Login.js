import logo from '../logo.svg';
import '../App.css';

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/page/Login.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className='text-3xl font-bold underline'>
          Learn React
          </div>
          
        </a>
      </header>
    </div>
  );
}

export default Login;
