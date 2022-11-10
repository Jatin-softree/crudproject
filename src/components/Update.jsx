import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Update = () => {

  const [data,setData] = useState([]);
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:9000/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      });
  },[]);
  console.log(data)

  // const[id,setId] = useState(0);
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  console.log(name,email,password)

  const navigate = useNavigate();


  const saveFun=()=>{
    const userValue={id:data._id,
                     name:data.name,
                     email:data.email,
                     password:data.password
                    }
    axios.put("http://localhost:9000/updateData",userValue).then((Response) => {console.log(Response.data)})
    console.log("Value",data);
    alert("Updated Successfully");
    navigate("/Read");
  }



  const changeValue=(e)=>{
    const{name,value}=e.target;
    setData({...data,[name]:value})
    }

  return (
    <>
    <h1>Update Operation</h1>
      <form>
        <div className="mb-3 col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={data.name}
            name="name"
            onChange={changeValue}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={data.email}
            name="email"
            onChange={changeValue}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={data.password}
            name="password"
            onChange={changeValue}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={saveFun}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
