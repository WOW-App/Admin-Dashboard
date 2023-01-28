<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

import axios from "axios";
import React from "react";
import './userEdit.css'
var token = null;
import 'bootstrap/dist/css/bootstrap.min.css';
import './userDelete.css';
var id=null;
var data=null;
const formData=new FormData();


const dataObj={
  phone:null,
  phone_status:null,
  email_status:null,
  kyc_status:null,
  notary_status:null,
  aa_status:null,
  is_employee:null,
  is_enterprise_admin:null,
  companyId:null,
  employeeId:null,
  email:null,
  userId:null
}
async function editUser(id){
  
   dataObj.userId=id;
   const data=JSON.stringify(dataObj);
   
    

    var config = {
                method: 'POST',
                url: 'https://development.wowapp.tech/api/user/infoupdate',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzQxMTAwMTN9.X_Ssu9Yf_BRIm9xWujaMFKv-NcQT59WaqYQcXUdacxg",
                  'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
                },
                 data:data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
               
                // console.log("post is",post)
              })
              .catch(function (error) {
                console.log(error);
              });
}

export default function EditUser(props) {
    
    const [show,setShow]=React.useState(null);
    

       
    return (
        <>
        <form >
        <div className="form-group">
          <label>
          User ID
          </label>
          <input className=" form-control"name="firstname" type="text" value={props.select}></input>
          </div>
        <div className="form-group">
          <label>
          phone
          </label>
          <input  className=" form-control" name="firstname" onBlur={(e)=>{dataObj.phone=e.target.value}} type="text"></input>
          </div>
          
          <div className="form-group">
          <label>
          email
          </label>
          <input na className=" form-control" me="firstname" onBlur={(e)=>{dataObj.email=e.target.value}} type="text"></input>
          </div>
          
          <div className="form-group">
          <label>
          companyId
          </label>
          <input na className=" form-control" me="twitter" onBlur={(e)=>{dataObj.companyId=e.target.value}} type="number"></input>
          </div>
          <div className="form-group">
          <label>
          employeeId
          </label>
          <input na className=" form-control" me="telegram" onBlur={(e)=>{dataObj.employeeId=e.target.value}} type="text"></input>
          </div>
         
          <div className="form-check">
          
          <input name="middlename" onBlur={(e)=>{if(e.target.checked){dataObj.phone_status=true}else{dataObj.phone_status=false}}} className="form-check-input" type="checkbox"></input>
          <label>
          phone_status
          </label>
          </div>
          <div className="form-check">
          
          <input name="lastname" onBlur={(e)=>{if(e.target.checked){dataObj.email_status=true}else{dataObj.email_status=false}}} className="form-check-input" type="checkbox"></input>
          
          <label>
          email_status
          </label></div>
          <div className="form-check">
          
          <input name="phone" onBlur={(e)=>{if(e.target.checked){dataObj.kyc_status="true"}else{dataObj.kyc_status="false"}}} className="form-check-input" type="checkbox"></input>
          <label>
          kyc_status
          </label>
          </div>
          <div className="form-check">
          
          <input name="phone_status" onBlur={(e)=>{if(e.target.checked){dataObj.notary_status="true"}else{dataObj.notary_status="false"}}} className="form-check-input" type="checkbox"></input>
          <label>
          notary_status
          </label>
          </div>
          <div className="form-check">
          
          <input name="gender" onBlur={(e)=>{if(e.target.checked){dataObj.aa_status="true"}else{dataObj.aa_status="false"}}} className="form-check-input" type="checkbox"></input>
          <label>
          aa_status
          </label>
          </div>
          <div className="form-check">
          
          <input name="dob" onBlur={(e)=>{if(e.target.checked){dataObj.is_employee=true}else{dataObj.is_employee=false}}} className="form-check-input" type="checkbox"></input>
          <label>
          is_employee
          </label>
          </div>
          <div className="form-check">
          
          <input name="instagram" onBlur={(e)=>{if(e.target.checked){dataObj.is_enterprise_admin=true}else{dataObj.is_enterprise_admin=false}}} className="form-check-input" type="checkbox"></input>
          <label>
          is_enterprise_admin
          </label>
          </div>
          <br/>
          <div className="form-check">
          
          <input name="instagram" onChange={(e)=>{if(e.target.checked){setShow(true)}else{setShow(null)}}} className="form-check-input" type="checkbox"></input>
          <label>
          <p>I agree to make changes</p>
          </label>
          </div>
          <button  className="btn btn-primary" disabled={!show} onClick={()=>{editUser(props.select)}}>submit</button>
          </form>


         
        </>
    
     
    )
}
    


