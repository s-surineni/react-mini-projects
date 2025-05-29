import './Login1.css';

function Login1() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" id="username" pattern="[a-z]+" required></input>
          <label htmlFor="username">Username</label>
        </div>
        <div className="user-box">
          <input type="password" id="password" pattern="[a-z]+" required></input>
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </div>
  );
}

export default Login1;