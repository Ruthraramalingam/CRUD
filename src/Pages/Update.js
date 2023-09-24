import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Api_Url } from '../Env';
import { useNavigate } from 'react-router-dom';
function Update() {
    const nav = useNavigate();
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setEmail(localStorage.getItem("email"));
        setAddress(localStorage.getItem("address"));
        setPhone(localStorage.getItem("phone"));
    },[])
    const updatesData = {id,firstName,lastName,email,phone,address}
    const updateDataform = async (e)=>{
        e.preventDefault();
        await axios.put(Api_Url+id , updatesData)
        .then((data)=>{
             console.log("Data updated successfuly");
             nav("/read");
        }).catch((err)=>{
             console.log(err);
        })
    }
  return (
    <div>
      <div className='container mb-5 mt-5'>
            <div className='row'>
           
                <div className='col-md-6 offset-3'>
                <h4>Fill the data</h4>
                    <form onSubmit={updateDataform}>
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
                             <button type='submit' className='btn btn-primary'>UPDATE DATA</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update