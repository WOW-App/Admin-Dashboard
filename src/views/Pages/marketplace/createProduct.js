<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

import './createProduct.css';
import axios from 'axios';
import React from 'react';

const dataObj={
logo:null,
policyid:null,
title:null,
premium :null,
coverage:null,
tenure:null,
type:null,
category:null,
subcategory:null,
policy_period:null,
sum_assured:null,
eligibility:null,
grace_period:null,
features:null,
insurer_des:null,
brochure:null,
text1:null,
text2:null,
visibilty_status:null,
featured_status:null,
is_enterprise_product:null,
validity:null,
insuranceType:null,
dependantsAllowed:null,
boost_point:null,
monthly_coverage:null,
annual_coverage:null,
company:null,
price:null,
discount:null
}


function productCreation(){
    var data = JSON.stringify(dataObj);
    //console.log(data);
    
var config = {
  method: 'post',
  url: 'http://localhost:6969/api/marketplace/create',
  headers: { 
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzQxMTAwMTN9.X_Ssu9Yf_BRIm9xWujaMFKv-NcQT59WaqYQcXUdacxg", 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}

export default function CreateProduct(){
    const[addPro,setAddPro]=React.useState(null)
    return(
        <>
        <form>
        <div className="form-check">
    <label for="exampleInputEmail1">Visibilty Status</label>
    <input type="checkbox"onChange={(e)=>{if(e.target.checked){dataObj.visibilty_status=true}else{dataObj.visibilty_status=false}}} className="form-check-input" id="exampleInputEmail1"  placeholder=""/>
    </div>
    <div className="form-check">
    <label for="exampleInputPassword1">Featured Status</label>
    <input type="checkbox" onChange={(e)=>{if(e.target.checked){dataObj.featured_status=true}else{dataObj.featured_status=false}}} className="form-check-input" id="exampleInputPassword1" placeholder=""/>
    </div>
    <div className="form-check">
  
    <label for="exampleInputPassword1">Enterprise Product</label>
    <input type="checkbox" onChange={(e)=>{if(e.target.checked){dataObj.is_enterprise_product=true}else{dataObj.is_enterprise_product=false}}} className="form-check-input" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="logo">Logo</label>
    <input type="text" onBlur={(e)=>{dataObj.logo=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Policy Id</label>
    <input type="text" onBlur={(e)=>{dataObj.policyid=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" onBlur={(e)=>{dataObj.title=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Premium</label>
    <input type="text" onBlur={(e)=>{dataObj.premium=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Coverage</label>
    <input type="text" onBlur={(e)=>{dataObj.coverage=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Tenure</label>
    <input type="text" onBlur={(e)=>{dataObj.tenure=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Type</label>
    <input type="text" onBlur={(e)=>{dataObj.type=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Category</label>
    <input type="text" onBlur={(e)=>{dataObj.category=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Sub Category</label>
    <input type="text" onBlur={(e)=>{dataObj.subcategory=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Policy Period</label>
    <input type="text" onBlur={(e)=>{dataObj.policy_period=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Sum Assured</label>
    <input type="text" onBlur={(e)=>{dataObj.sum_assured=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Eligibilty</label>
    <input type="text" onBlur={(e)=>{dataObj.eligibility=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Grace Period</label>
    <input type="text" onBlur={(e)=>{dataObj.grace_period=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Features</label>
    <input type="text" onBlur={(e)=>{dataObj.features=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Insurer Description</label>
    <input type="text" onBlur={(e)=>{dataObj.insurer_des=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Brochure</label>
    <input type="text" onBlur={(e)=>{dataObj.brochure=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Additional Text  1</label>
    <input type="text" onBlur={(e)=>{dataObj.text1=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Additional Text 2</label>
    <input type="text" onBlur={(e)=>{dataObj.text2=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
 
  <div className="form-group">
    <label for="exampleInputPassword1">Insurance Type</label>
    <input type="text" onBlur={(e)=>{dataObj.insuranceType=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Dependants Allowed</label>
    <input type="number" onBlur={(e)=>{dataObj.dependantsAllowed=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Validity</label>
    <input type="text" onBlur={(e)=>{dataObj.validity=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="number" onBlur={(e)=>{dataObj.price=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Discount</label>
    <input type="number" onBlur={(e)=>{dataObj.discount=e.target.value}} className="form-control" id="exampleInputEmail1"  placeholder=""/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Boost Points</label>
    <input type="number" onBlur={(e)=>{dataObj.boost_point=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Monthly Coverage</label>
    <input type="text" onBlur={(e)=>{dataObj.monthly_coverage=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Annual Coverage</label>
    <input type="text" onBlur={(e)=>{dataObj.annual_coverage=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Company</label>
    <input type="text" onBlur={(e)=>{dataObj.company=e.target.value}} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <div className="form-check">
    <input type="checkbox" onChange={(e)=>{if(e.target.checked){setAddPro(true)}else{setAddPro(null)}}} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1" >
        The above info is valid
    </label>
  </div>
  <button type="submit" className="btn btn-primary" disabled={!addPro} onClick={()=>{productCreation()}}>Add Product</button>
</form>
        </> 

    )
}