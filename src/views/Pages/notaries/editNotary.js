<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
import React from "react";
import axios from "axios";

const dataObj={
    agent_id:null,
    name:null,
    address:null,
    adhar_card:null,
    phone :null,
    email:null,
    city:null,
    licence_no:null,
    location:null,
    is_athome:null,
    is_available:null,
    longitude:null,
    latitude:null,
    
    password:null
    
    }

    var token = "Bearer "+localStorage.getItem('Token')

    function notaryEdition(id){
      dataObj.agent_id=id;
        var data = JSON.stringify(dataObj);
        //console.log(data);
        
    var config = {
      method: 'post',
      url: 'https://development.wowapp.tech/api/notary_user/edit',
      headers: { 
        'Authorization': token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
    }


export default function EditNotary(props){
    const [editNotary,setEditNotary]=React.useState(null)
    return(
        <><form>
         <div className="form-check">
  
  <label for="exampleInputPassword1">is_athome</label>
  <input type="checkbox" onChange={(e)=>{if(e.target.checked){dataObj.is_athome=true}else{dataObj.is_athome=false}}} className="form-check-input" id="exampleInputPassword1" placeholder=""/>
</div>
        <div className="form-check">
  
  <label for="exampleInputPassword1">is_available</label>
  <input type="checkbox" onChange={(e)=>{if(e.target.checked){dataObj.is_available=true}else{dataObj.is_available=false}}} className="form-check-input" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="logo">Name</label>
  <input type="text" onBlur={(e)=>{dataObj.name=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
  
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Address</label>
  <input type="text" onBlur={(e)=>{dataObj.address=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Agent ID</label>
  <input type="text" onBlur={(e)=>{dataObj.agent_id=e.target.value}} className="form-control" id="exampleInputPassword1" value={props.select}/>
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="text" onBlur={(e)=>{dataObj.password=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="exampleInputEmail1">Aadhar No.</label>
  <input type="text" onBlur={(e)=>{dataObj.adhar_card=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
  
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Phone No.</label>
  <input type="text" onBlur={(e)=>{dataObj.phone=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="exampleInputEmail1">Email ID</label>
  <input type="text" onBlur={(e)=>{dataObj.email=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
  
</div>
<div className="form-group">
  <label for="exampleInputPassword1">City</label>
  <input type="text" onBlur={(e)=>{dataObj.city=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="exampleInputEmail1">Licence No.</label>
  <input type="text" onBlur={(e)=>{dataObj.licence_no=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
  
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Location</label>
  <input type="text" onBlur={(e)=>{dataObj.location=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-group">
  <label for="exampleInputEmail1">latitude</label>
  <input type="text" onBlur={(e)=>{dataObj.latitude=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
  
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Longitude</label>
  <input type="text" onBlur={(e)=>{dataObj.longitude=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
</div>
<div className="form-check">
    <input type="checkbox" onChange={(e)=>{if(e.target.checked){setEditNotary(true)}else{setEditNotary(null)}}} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1" >
        The above Notary info is valid
    </label>
  </div>
<button type="submit" className="btn btn-primary" disabled={!editNotary} onClick={()=>{notaryEdition(props.select)}}>Edit Notary</button>

</form>
        </>
    )
}