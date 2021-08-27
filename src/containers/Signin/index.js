import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions";


Login.propTypes = {};
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showError = auth.error;

  const loginUser = (e) => {
    e.preventDefault();
    const send = {
      username,
      password,
    };

    // alert(JSON.stringify(send));
    dispatch(login(send));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (auth.authenticating) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="login-box" style={{ margin: "200px auto" }}>
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1">
              <b>Login</b>
            </a>
          </div>
          <div className="card-body">
            {/* <p className="login-box-msg">Sign in to start your session</p> */}
            <form action="" method="post" onSubmit={loginUser}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  {/* <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div> */}
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            {/* /.social-auth-links */}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      {/* /.login-box */}
      {/* jQuery */}
      {/* Bootstrap 4 */}
      {/* AdminLTE App */}
    </>
  );
}
export default Login;
