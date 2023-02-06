//import './list.css';
import { BiWrench } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import CreateUser from './createUser';
import DeleteUser from './users/userDelete';
import EditUser from './users/userEdit';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import UpdateAppointment from "./appointment/updateappointment";
var notId=null;


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzEwODI4ODh9.efnPMsw_EMn7nNYvjYbgAr3XSnJYI1Q2fVd8hjp-tFs");
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  //body: raw,
  redirect: 'follow'
};


var tmp = "NNNNN";

import axios from "axios";
import React ,{useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
const baseURL = "http://localhost:6969/api/appointments/get";

export default function AppointmentList() {
  const [post, setPost] = React.useState(null);
  const [create,setCreate]=useState(false);
  const [edit,setEdit]=useState(false);
  const [del,setDelete]=useState(false);


  React.useEffect(() => {
    axios.get(baseURL,requestOptions).then((response) => {
      setPost(response.data)

     
    });
  }, []);
//console.log(post.appo)
  if (!post) return null;

  return (
    <>
    <div className="func-btn">
          <button className="action-btn"  onClick={()=>{setCreate(true);setEdit(false);setDelete(false)}}>
            <BiPlus/> Add an appointment 
          </button>
          <button className="action-btn" onClick={()=>{setCreate(false);setEdit(true);setDelete(false)}}>
          <BiWrench/> Edit an appointment 
          </button>
          <button className="action-btn" onClick={()=>{setCreate(false);setEdit(false);setDelete(true)}}>
          <BiTrash/> Delete an appointment 
          </button>
        </div>
        <br/>
    {create ==false && edit == false && del==false && <>
  
    
    <h1 className='heading'>All User appointments Data</h1>
    <br/><br/>
      <div>
          <table class="table table-light table-hover" striped bordered hover variant="dark">
      
            <tbody>
                <tr>
                   <th className="table-id">Appointment id</th>
                   <th className="table-fullname">User id</th>
                   <th className="table-dob">Agent ID</th>
                   <th className="table-email">Appointment Date</th>
                   <th className="table-phone">Time</th>        
                   <th className="table-wh"> Status</th>
                   <th className="table-wh"> Edit/Delete</th>

                </tr>
                      {Object.entries(post.appo).map(([key, value], i) => {
                        return(
                          <tr class="align-center ">
                                <td  className="table-id">{value.id}</td>
                                <td className="table-fullname">{value.userId}</td>
                                <td  className="table-dob">{value.agent_id}</td>
                                <td className="table-email">{value.date}</td>
                                <td  className="table-phone">{value.time}</td>                               
                                <td  className="table-wh">{value.status}</td>
                                 <div className='rec-btn'>
                                    <button className='user-edit-btn' onClick={()=>{notId=value.id;setCreate(false);setEdit(true);setDelete(false)}}><CiEdit size={25}/></button>
                                    {""}
                                    <button className='user-delete-btn' onClick={()=>{setCreate(false);setEdit(false);setDelete(true)}}><AiOutlineDelete size={25}/></button>
                                </div>
                           </tr>
                        )
                
      
                      })}
              </tbody>
          </table>  
      </div>
      </>
      }
      {create ==true && edit == false && del==false && <><CreateUser/></>}
      {create ==false && edit == true && del==false && <UpdateAppointment notId={notId}/>}
      {create ==false && edit == false && del==true && <DeleteUser/>}

      </>
      
 )
}
   