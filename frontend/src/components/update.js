import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import './style.css'
function Update() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const [err,seterr] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    const getSingleUser = async ()=>{
      const response = await fetch(`http://localhost:5001/api/user/${id}`);
      
    const result = await response.json();
    if(!response.ok){
      seterr(result.error)
      console.log(result.error);
    }
    if(response.ok){
      seterr("");
      console.log(result);
      setAge(result.age)
      setName(result.name)
      setEmail(result.email)
    }
  }
    useEffect(()=>{
      getSingleUser();
    },[id])

    async function HandleEdit(e){
      e.preventDefault();
      const UpdateUser = {name,email,age};
      const response = await fetch(`http://localhost:5001/api/user/${id}`,{
          method:"PUT",
          body:JSON.stringify(UpdateUser),
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
      navigate('/all');
      }
  }
  
  return (
       <div className="container my-2">
      {err && <div class="alert alert-danger">{err}</div>}
      <h2 classNameName="text-center">Edit Blog</h2>
      <form onSubmit={HandleEdit} >
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Author</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
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

export default Update
