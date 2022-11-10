import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const headers = {
  Authorization: "Bearer paperboy",
};

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("http://localhost:9000/all").then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  }
  function handleDelete(id) {

    let data = { id:id };
    
    axios
      .delete("http://localhost:9000/deleteUser",{headers,data})
      .then(() => {
        getData();
      });
  }

  // const setToLocalStorage = (id, name, email, password) => {
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  // };

  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  // const editHandler = (name,email,password) =>{
  //   console.log(name,email,password);
  //   setName(name);
  //   setEmail(email);
  //   setPassword(password);
  // }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="navbar">
        <h1>Read Operation</h1>

        <Link to={"/"}>
          <button className="btn btn-info">Logout</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
          
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          const { _id, name, email, password } = eachData;
          console.log(_id);
          return (
            
              <tbody>
                <tr>
                
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                   <td>
                    <Link to={`/update/${_id}`}>
                      <button
                        className="btn btn-success"
                        // onClick={(e)=>{
                        //   editHandler(e.target.value);
                        // }}
                        // onClick={() =>
                        //   setToLocalStorage(
                        //     eachData.id,
                        //     eachData.name,
                        //     eachData.email,
                        //     eachData.password
                        //   )
                        // }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(_id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                 </tr>
              </tbody>
          
          );
        })} 
      </table>
    </>
  );
};

export default Read;
