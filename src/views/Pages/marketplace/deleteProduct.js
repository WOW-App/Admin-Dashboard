import './deleteProduct.css'
import axios from 'axios'
import React from 'react';
var token = "Bearer "+localStorage.getItem('Token')

const dataObj={
    policyid:null
}

function productDelete(id){
    dataObj.policyid=id;
    var data = JSON.stringify(dataObj);
    //console.log(data);
    
var config = {
  method: 'post',
  url: '/api/marketplace/delete',
  headers: { 
    'Authorization': token, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  alert(response.data.msg)
})
.catch(function (error) {
  console.log(error);
});

}

export default function DeleteProduct(props){
    const[delCheck,setDelCheck]=React.useState(null)
    return(
        <>  <div className="form-page">
            <div className="del-input">
                <label>Policy ID</label>
                <input className="inp-id"type="text" onBlur={(e)=>{dataObj.policyid=e.target.value}} value={props.select}/>
            </div>
            <div className="cnf-del">
                <div className='check'>
            <input type="checkbox" onChange={(e)=>{if(e.target.checked){setDelCheck(true)}else{setDelCheck(false)}}}/>
                <label>I agree to delete the above mentioned policy from marketplace</label>
                </div>
                <div className='del-btn-box'>
                <button className='del-btn'  disabled={!delCheck}  onClick={()=>{productDelete(props.select)}}>Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}