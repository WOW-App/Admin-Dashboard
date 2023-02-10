
import axios from 'axios'
import React from 'react';

const dataObj={
    userId:null,
    appointmentId:null
}

var token = "Bearer "+localStorage.getItem('Token')

function appoDelete(notId){
  dataObj.userId=notId[0];
  dataObj.appointmentId=notId[1];
    var data = JSON.stringify(dataObj);
    //console.log(data);
    
var config = {
  method: 'post',
  url: '/api/appointment/delete',
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

export default function DeleteAppo(props){
    const[delCheck,setDelCheck]=React.useState(null)
    return(
        <>  <div className="form-page">
           
            <div className="del-input">
                <label>Appointment </label>
                <input className="inp-id"type="text" onBlur={(e)=>{dataObj.agent_id=e.target.value}} value={props.notId[1]}/>
            
            </div>
            
            <div className="cnf-del">
                <div className='check'>
            <input type="checkbox" onChange={(e)=>{if(e.target.checked){setDelCheck(true)}else{setDelCheck(false)}}}/>
                <label>I agree to delete the above mentioned agent from notary details</label>
                </div>
                <div className='del-btn-box'>
                <button className='del-btn'  disabled={!delCheck}  onClick={()=>{appoDelete(props.notId)} } type="submit">Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}