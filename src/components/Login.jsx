import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email:"", password:"" });

  const viewData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = () => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    axios.post("http://localhost:9000/Login", userData).then(
      (res) => {
        console.log(res.data);
        alert(res.data.message);
        if (res.data.user) {
          navigate("/read");
        }
      }
    );
  };

  return (
    <form>
      <h1>Login Here </h1>
      <div className="mb-3 col-md-6">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          name="email"
          value={data.email}
          onChange={viewData}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={data.password}
          onChange={viewData}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

      <div className="mb-3">
        <label className="form-label">
          Don't have account? <Link to={"/"}> SignUp Here</Link>
        </label>
      </div>
    </form>
  );
};

export default Login;
