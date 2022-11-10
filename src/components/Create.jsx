import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const header = { "Access-Control-Allow-Origin": "*" };

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    axios.post("http://localhost:9000/register", {
      name: name,
      email: email,
      password: password,
      header
    })

    .then(()=>{
      history("/read");
    });
  };

  return (
    <form>
      <h1>Sign Up </h1>
      <div className="mb-3 col-md-6">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <div className="mb-3">
      <label className="form-label">
        Already have account? <Link to={"/login"}> Login Here</Link>
      </label>
    </div>
    </form>
  );
};

export default Create;
