import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Authentication.css";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmite = (event) => {
    event.preventDefault();
    console.log("data", email, password);
  };

  useEffect(() => {
    console.log("effect");
    document.title = email;
  }, [])
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center">Login</h1>
            <p className="text-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <form onSubmit={handleSubmite}>
              <fieldset>
                <filedset className="form-group">
                  <input
                    type="email"
                    className="form-control form-controle-lg logForm"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </filedset>
              </fieldset>

              <fieldset>
                <filedset className="form-group">
                  <input
                    type="password"
                    className="form-control form-controle-lg logForm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </filedset>
                <button className="btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
