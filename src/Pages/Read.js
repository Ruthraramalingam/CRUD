import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api_Url } from "../Env";

function Read() {
    const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const getapiData = () => {
    axios
      .get(Api_Url)
      .then((data) => {
        console.log("Fetehced data correctly");
        setPosts(data.data);
      })
      .catch((err) => {
        console.log("some error");
      });
  };
  useEffect(() => {
    getapiData();
  }, []);

  const deleteData = async (id)=>{
       await axios.delete(Api_Url+id)
       .then((data)=>{
          console.log("Data deleetd");
       }).catch((er)=>{
         console.log(er);
       })
       getapiData();
  }

  const updateUser = ({firstName,lastName,email,address,phone,id})=>{
      localStorage.setItem("id",id);  
      localStorage.setItem("firstName",firstName);  
      localStorage.setItem("lastName",lastName);  
      localStorage.setItem("email",email);  
      localStorage.setItem("address",address);  
      localStorage.setItem("phone",phone);  
      nav("/update");
  }
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
                 {
                    posts.map((res)=>(
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.firstName}</td>
                            <td>{res.lastName}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>{res.address}</td>
                            <td>
                                <button className="btn btn-success me-2"  onClick={()=>updateUser(res)} >Update</button>
                                <button className="btn btn-danger" onClick={()=>deleteData(res.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                 }
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
