import React, { useState } from 'react';
import { Api_Url } from '../Env';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Create() {
    const [msg, setMsg] = useState("");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const formData = {firstName,lastName,email,address,phone} 
    const nav = useNavigate();
     const addDataform = async (e)=>{
        e.preventDefault();
         await axios.post(Api_Url,formData)
         .then((data)=>{                   
                setMsg("data Added Successfully");
                nav("/read");             
         }).catch((err)=>{
             console.log("There is some error");
         })
     } 

  return (
    <div>
        <div className='container mb-5 mt-5'>
            <div className='row'>
           
                <div className='col-md-6 offset-3'>
                <h4>Fill the data</h4>
                    <form onSubmit={addDataform}>
                        <div className='form-group py-3'>
                             <input  placeholder="Enter First name" className='form-control' type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div className='form-group py-3'>
                             <input  placeholder="Enter Last Name" className='form-control' type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                        <div className='form-group py-3'>
                             <input  placeholder="Enter Email" className='form-control' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group py-3'>
                             <input  placeholder="Enter Phone" className='form-control' type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className='form-group py-3'>
                             <input  placeholder="Enter Address" className='form-control' type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                        <div className='form-group py-3'>
                             <button type='submit' className='btn btn-primary'>ADD DATA</button>
                        </div>
                    </form>
                    <h4>{msg}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Create