
import axios from "axios";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './userDelete.css';

var data=null;
var token = "Bearer "+localStorage.getItem('Token');

async function delUser(id){
    data=JSON.stringify({
    "id":id
    
   })
   
    var config = {
                method: 'POST',
                url: 'https://development.wowapp.tech/api/user/delete',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': token,
                  'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
                },
                 data:data
              };
              
              axios(config)
              .then(function (response) {
               // console.log(JSON.stringify(response.data));
               alert(response.data.msg)
                
              })
              .catch(function (error) {
                console.log(error);
              });
}

export default function DeleteUser(props) {
       const [user,setUser] = React.useState(false)
       const [show,setShow]=React.useState(null);

    
    return (
        <>
        
        <div className="del-form">
            <div className="del-user-data">
            <label>UserID</label>
            <input type="number" class="form-control" id="inputPassword" value={props.select} onChange={(e)=>{takeId(e)}}></input>
            </div>
            <div className="form-check">
          
          <input name="instagram" onChange={(e)=>{if(e.target.checked){setShow(true)}else{setShow(null)}}} className="form-check-input" type="checkbox"></input>
          <label>
          <p>I agree to delete the user</p>
          </label>
          </div>
            <button className="act-btn"  disabled={!show} onClick={()=>{delUser(props.select);if(user){setUser(true)}else{setUser("notFound")}}}>Delete User</button>
           

        </div>
    
     
   
</>
    
     
    )
}
    


