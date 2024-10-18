import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './style.css'
function Read() {
  const[data,setdata] =useState();
  const[err,seterr]=useState("");

  async function getData(){
    const response = await fetch("http://localhost:5001")
    const result = await response.json();
    if(!response.ok){
      seterr(result.error)
      console.log(result.error);
    }
    if(response.ok){
      setdata(result);
      console.log(result);
    }
  }
  const HandleDelete = async(id)=>{
    const response = await fetch(`https://first-deploy-k9hs.vercel.app/api/user/${id}`,{
      method:"DELETE",
    });
    const result = await response.json();
    if(!response.ok){
      seterr(result.error)
      console.log(result.error);
    }
    if(response.ok){
     
      seterr("Blog Deleted Successfully");
      console.log(result);
      setTimeout(()=>{
        getData();
        seterr("");
      },1000)
    }
  }
  useEffect(()=>{
    getData();
  },[]);
  console.log({data})
  return (
    <div className="container my-2" >
      {err && <div class="alert alert-danger">{err}</div>}
     <h1 className="text-center my-4">All Blogs</h1>
     <div className="row cardcolor">
      {data?.map((ele)=>(
      <div key={ele._id} className="col-4 ">
      <div className="card" >
      <div className="card-body d-flex flex-column text-center gap-2 cardcolor">
      <div><h5 className="card-title cardcolor ">{ele.email}</h5></div>
      <div><h6 className="card-subtitle pb-2 cardcolor text-muted">Author: {ele.name}</h6></div>
      <div className="border p-2 cardcolor rounded "><p className="card-text cardcolor">{ele.age}</p></div>
      <Link href="#" className="card-link cardcolor" onClick={()=> HandleDelete(ele._id)}>Delete</Link>
      <Link to={`/${ele._id}`} className="card-link cardcolor">Edit{""}</Link>
    </div>
  </div>
        </div>
      ))}
      
     </div>
    </div>
  );
}

export default Read;