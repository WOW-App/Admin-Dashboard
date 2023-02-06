<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dropdown/style.css';
import { useState } from "react";
import './updateappointment.css'

var post=[];
var selNotary=null;

var dataObj={
    userId:null,
    agent_id:null,
    appointmentId:null
}


var token = "Bearer "+localStorage.getItem('Token');
async function setAppointment(dataObj){
    var data = JSON.stringify(dataObj);
    console.log("data in set appo",dataObj)
    var config = {
        method: 'post',
        url: 'http://localhost:6969/api/appointment/assign_notary',
        headers: { 
          'Authorization': token, 
          'Cookie': 'connect.sid=s%3AEsIejijfclbeQ_J0fpUkqm61GzdoJYzH.w8vbzDyih6JEocfSjnWpC%2BdTt4bjYJkNz8j645UlQNU',
          'Content-Type': 'application/json'
        },
        data:data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response)
        //console.log(JSON.stringify(response.data.data));
        // post=((response.data.data));
        // console.log("post is",post)
        
      })
      .catch(function (error) {
        console.log(error);
      });
}

async function  getNotaryDetails(){
    var config = {
        method: 'get',
        url: 'https://development.wowapp.tech/api/notary_user/all',
        headers: { 
          'Authorization': token, 
          'Cookie': 'connect.sid=s%3AEsIejijfclbeQ_J0fpUkqm61GzdoJYzH.w8vbzDyih6JEocfSjnWpC%2BdTt4bjYJkNz8j645UlQNU'
        }
      };
      
      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data.data));
        post=((response.data.data));
       //console.log("post is",post)
        
      })
      .catch(function (error) {
        console.log(error);
      });

}

export default function UpdateAppointment(props) {
    getNotaryDetails();
    dataObj.userId=props.notId.userId
    dataObj.appointmentId=props.notId.appointmentId
    
      
    return (


        <div className="notary-assign">
            <div>
            <table class="table table-light table-hover" striped bordered hover variant="dark">

                <tbody>
                    <tr>
                        
                        <th className="table-fullname" id="th">User ID</th>
                        <th className="table-address" id="th"> Appointment ID</th>
                        <th className="table-id" id="th">Notary Id</th>
                       
                        

                    </tr>
                    <tr class="align-center ">
                                <td className="table-dob">{props.notId.userId}</td>
                                <td className="table-wh">{props.notId.appointmentId}</td>
                                <td className="table-wh">
                                    <select onChange={(e)=>{dataObj.agent_id=((e.target.value).split("-")[0].split(" ")[0])}}>
                                    {Object.entries(post).map(([key, value], i) => {
                        return(
                          <option >{value.agent_id + " - " + value.name}</option>
                        )
                
      
                      })}
                                    </select>
                                </td>
                                
                            </tr>
                       
                </tbody>
             </table>
             </div>
            <div>
                <button type="submit" className="btn btn-primary" onClick={()=>{console.log(dataObj);setAppointment(dataObj)}}>Submit</button>
            </div>


        </div>
    )

}
