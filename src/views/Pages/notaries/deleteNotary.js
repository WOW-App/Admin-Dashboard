
import axios from 'axios'
import React from 'react';

const dataObj={
    agent_id:null
}

function notaryDelete(id){
  dataObj.agent_id=id;
    var data = JSON.stringify(dataObj);
    //console.log(data);
    
var config = {
  method: 'post',
  url: 'https://development.wowapp.tech/api/notary_user/delete',
  headers: { 
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzQxMTAwMTN9.X_Ssu9Yf_BRIm9xWujaMFKv-NcQT59WaqYQcXUdacxg", 
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

export default function DeleteNotary(props){
    const[delCheck,setDelCheck]=React.useState(null)
    return(
        <>  <div className="form-page">
            <div className="del-input">
                <label>Agent ID</label>
                <input className="inp-id"type="text" onBlur={(e)=>{dataObj.agent_id=e.target.value}} value={props.select}/>
            </div>
            <div className="cnf-del">
                <div className='check'>
            <input type="checkbox" onChange={(e)=>{if(e.target.checked){setDelCheck(true)}else{setDelCheck(false)}}}/>
                <label>I agree to delete the above mentioned agent from notary details</label>
                </div>
                <div className='del-btn-box'>
                <button className='del-btn'  disabled={!delCheck}  onClick={()=>{notaryDelete(props.select)}}>Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}