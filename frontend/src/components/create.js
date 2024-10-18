import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Create() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const [err,seterr] = useState("");
    console.log(name,email,age);
    async function HandleSubmit(e){
      console.log(`Sending data to: ${process.env.REACT_APP_BACKEND_URI}`);
        e.preventDefault();
        const addUser = {name,email,age};
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}`,{
            method:"POST",
            body:JSON.stringify(addUser),
            headers: {
                "Content-Type":"application/json"
            }
        });
        
        const result = await response.json();
        if(!response.ok){
            seterr(result.error)
            console.log(result.error);
            
        }
        if(response.ok){
          seterr("");
    console.log(result);
    setName("");
    seterr("");
    setEmail("");
    setAge("");
    navigate('/all')
        }
    }
    
  return (
    <div className="container my-2 ">
      {err && <div class="alert alert-danger">{err}</div>}
      <h2 className="text-center">Create Blog</h2>
      <form onSubmit={HandleSubmit}>
  <div className="mb-3">
    <label className="form-label ">Title</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Author</label>
    <input type="text" className="form-control " value={name} onChange={(e)=>{setName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Content</label>
    <input type="text" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  );
}

export default Create;
