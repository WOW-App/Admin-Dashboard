import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

import UpdateAppointment from "./updateappointment";
import DeleteAppo from "./deleteAppointment";

import axios from "axios";
import React ,{useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>



var notId=null;
var token= "Bearer "+localStorage.getItem('Token')

export default function AppointmentList() {
  const [post, setPost] = React.useState(null);
  const [create,setCreate]=useState(false);
  const [edit,setEdit]=useState(false);
  const [del,setDelete]=useState(false);


  React.useEffect(() => {
   
   
    var config = {
        method: 'get',
        url: 'https://development.wowapp.tech/api/appointments/get',
        headers: { 
          'Authorization': token, 
          'Cookie': 'connect.sid=s%3AEsIejijfclbeQ_J0fpUkqm61GzdoJYzH.w8vbzDyih6JEocfSjnWpC%2BdTt4bjYJkNz8j645UlQNU'
        }
      };
      
      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data.data));
        setPost((response.data));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
//console.log(post.appo)
  if (!post) return null;

  return (
    <>
   
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
                   <th className="table-wh"> Assign Notary</th>
                   <th className="table-wh"> Delete</th>

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
                                <td  className="table-wh">
                                 <div className='rec-btn'>
                                    <button className='user-edit-btn' onClick={()=>{notId=value;setCreate(false);setEdit(true);setDelete(false)}}><CiEdit size={25}/></button>
                                    </div></td>
                                    <td  className="table-wh">
                                    <div className='rec-btn'>
                                    <button className='user-delete-btn' onClick={()=>{notId=[value.userId,value.appointmentId];setCreate(false);setEdit(false);setDelete(true)}}><AiOutlineDelete size={25}/></button>
                                </div></td>
                           </tr>
                        )
                
      
                      })}
              </tbody>
          </table>  
      </div>
      </>
      }
      
      {create ==false && edit == true && del==false && <>
        <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
        <UpdateAppointment notId={notId}/>
        </>}
      {create ==false && edit == false && del==true && <>
        <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
        <DeleteAppo notId={notId}/>
        </> }

      </>
      
 )
}
   