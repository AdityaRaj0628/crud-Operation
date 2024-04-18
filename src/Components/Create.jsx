import React from 'react'
import { useState } from 'react'
import axios from "axios";
 import {Link, useNavigate} from "react-router-dom"
function Create() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

const history=useNavigate()
 const header={"Acess-Control-Allow-Origin":"*"};
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("clicked")
   axios.post(
    'https://65eff443ead08fa78a514ba1.mockapi.io/crud',
    {name:name,email:email,
  header,
    }
   )
  .then(()=>{
    history('/read')
  })
}
  return (
    <>
   <div className='d-flex justify-content-between m-2'>
   <h2> Create</h2>
  
 <Link to="/read">
 <button className="btn btn-primary">Show Data</button>
 </Link>
   </div>
<form>
<div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="Name" className="form-control" id="Name" 
    onChange={(e)=>setName (e.target.value)} 
    />
  </div>

  <div ClassName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    
    onChange={(e)=>setEmail (e.target.value)}
    />
   
  </div>
 
 <div className='m-2'>
  
 <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
 </div>
  
</form>
    </>
  )
}

export default Create
