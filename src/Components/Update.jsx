import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
function Update() {
    const [id,setId] =useState(0)
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const navigate=useNavigate()

    useEffect(()=>{
    setId(  localStorage.getItem("id"))
    setName(  localStorage.getItem("name"))
    setEmail(  localStorage.getItem("email"))
    },[])

    const handleUpdate=(e)=>{
      e.preventDefault();
      console.log("Id...",id);
        axios.put(`https://65eff443ead08fa78a514ba1.mockapi.io/crud/${id}`,
      
        {
          name:name,email:email
        }
      ).then(()=>{
navigate("/read")
      })
    }

  return (
   <>
   <h2>Update</h2>
<form>
<div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="Name" className="form-control" id="Name" 
     value={name}
    onChange={(e)=>setName (e.target.value)} 
    />
  </div>

  <div ClassName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    value={email}
    onChange={(e)=>setEmail (e.target.value)}
    />
   
  </div>
 
 
  <button type="submit" className="btn btn-primary mx-2" 
  onClick={handleUpdate}
  >Update</button>
<Link to="/read">

<button className="btn btn-info mx-2">Back</button>
</Link>
  
</form>
   </>
  )
}

export default Update