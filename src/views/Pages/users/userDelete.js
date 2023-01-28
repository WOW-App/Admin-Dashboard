
import axios from "axios";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './userDelete.css';

var data=null;

async function delUser(id){
    data=JSON.stringify({
    "id":id
    
   })
   
    var config = {
                method: 'POST',
                url: 'https://development.wowapp.tech/api/user/delete',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzQxMTAwMTN9.X_Ssu9Yf_BRIm9xWujaMFKv-NcQT59WaqYQcXUdacxg",
                  'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
                },
                 data:data
              };
              
              axios(config)
              .then(function (response) {
               // console.log(JSON.stringify(response.data));
                
              })
              .catch(function (error) {
                console.log(error);
              });
}

export default function DeleteUser(props) {
       const [user,setUser] = React.useState(false)


    
    return (
        <>
        
        <div className="del-form">
            <div className="del-user-data">
            <label>UserID</label>
            <input type="number" class="form-control" id="inputPassword" value={props.select} onChange={(e)=>{takeId(e)}}></input>
            </div>
            <button className="act-btn" onClick={()=>{delUser(props.select);if(user){setUser(true)}else{setUser("notFound")}}}>Delete User</button>
           

        </div>
    
     
   
</>
    
     
    )
}
    


