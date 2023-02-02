import axios from "axios";
import React ,{useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './userList.css';

import DeleteUser from '../users/userDelete';
import EditUser from '../users/userEdit';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
var token=null;

var select=null;

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

var myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};




const baseURL = "https://development.wowapp.tech/dash/users";

export default function UserList() {

  const [post, setPost] = React.useState(null);
  const [create,setCreate]=useState(false);
  const [edit,setEdit]=useState(false);
  const [del,setDelete]=useState(false);


  React.useEffect(() => {
    token="Bearer "+localStorage.getItem('Token')
    axios.post(baseURL,requestOptions).then((response) => {
      setPost(response.data);

     
    });
  }, []);

  if (!post) return null;

  return (
    <>
    
    {create ==false && edit == false && del==false && <>
  
    <p className='heading'>Users Registered with WOW App</p>
    <br/>
      <div>
          <table class="table table-light table-hover" striped bordered hover variant="dark">
      
            <tbody>
                <tr>
                   <th className="table-id">userId</th>
                   <th className="table-fullname">Full Name</th>
                   <th className="table-email">Email Address</th>
                   <th className="table-phone">Phone No.</th>
                   <th className="table-dob"> D.O.B</th>
                   <th className="table-wh"> Wealth Health</th>
                   <th className="rec-op"> Edit/Delete</th>

                </tr>
                      {Object.entries(post.userdata).map(([key, value], i) => {
                        return(
                          <tr class="align-center ">
                                <td  className="table-id">{value.id}</td>
                                <td className="table-fullname">{value.fullName}</td>
                                <td className="table-email">{value.email}</td>
                                <td  className="table-phone">{value.phone}</td>
                                <td  className="table-dob">{value.dob}</td>
                                <td  className="table-wh">{value.wh}</td>
                                <td className="rec-op"> 
                                <div className='rec-btn'>
                                    <button className='user-edit-btn' onClick={()=>{select=value.id;setCreate(false);setEdit(true);setDelete(false)}}><CiEdit size={25}/></button>
                                    {""}
                                    <button className='user-delete-btn' onClick={()=>{select=value.id;setCreate(false);setEdit(false);setDelete(true)}}><AiOutlineDelete size={25}/></button>
                                </div>
                                </td>
      
                           </tr>
                        )
                
      
                      })}
              </tbody>
          </table>  
      </div>
      </>
      }
      {create ==true && edit == false && del==false && <><CreateUser/></>}
      {create ==false && edit == true && del==false && <> 
      <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
      <EditUser select={select}/> </>}
      {create ==false && edit == false && del==true && 
      <>
      <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
      <DeleteUser select={select}/></>}

      </>
      
 )
}
   