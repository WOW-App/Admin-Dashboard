import './notaryList.css';
var select;

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiWrench } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import CreateNotary from './createNotary';
import EditNotary from './editNotary';
import DeleteNotary from './deleteNotary';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

var token = "Bearer "+localStorage.getItem('Token')

export default function NotaryList() {
  const [post, setPost] = React.useState(null);
  const [create,setCreate]=React.useState(false);
  const [edit,setEdit]=React.useState(false);
  const [del,setDelete]=React.useState(false)

  React.useEffect(() => {
    
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
        setPost((response.data));
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }, []);

  if (!post) return null;

  return (
    <>
    {create==false && edit == false && del==false &&<>
   
        <div className="nt-pg-header">
    <p className='nt-pg-heading'>Notaries Registered with WOW App</p>
    <button className="nt-pg-button" onClick={()=>{setCreate(true) ; setEdit(false) ; setDelete(false)}}>Add a notary</button>
    </div>
    <br/><br/>
      <div>

          <table class="table table-light table-hover" striped bordered hover variant="dark">
      
            <tbody>
                <tr>
                   <th className="table-id" id="th">Notary Id</th>
                   <th className="table-licence" id="th"> Licence No.</th>
                   <th className="table-fullname" id="th">Name</th>
                   <th className="table-address" id="th"> Address</th>
                   <th className="table-phone" id="th">Phone No.</th>
                   <th className="table-email" id="th"> Email Id</th>
                   <th className="table-aadhar" id="th"> Aadhar No.</th>
                   <th className='rec-op'>Edit/Delete</th>

                </tr>
                      {Object.entries(post.data).map(([key, value], i) => {
                        return(
                          <tr class="align-center ">
                                <td  className="table-id">{value.id}</td>
                                <td className="table-licence">{value.licence_no}</td>
                                <td className="table-fullname">{value.name}</td>
                                <td className="table-address">{value.address}</td>
                                <td  className="table-phone">{value.phone}</td>
                                <td className="table-email">{value.email}</td>
                                <td  className="table-aadhar">{value.adhar_card}</td>
                                <td className='rec-op'>
                                <div className='rec-btn'>
                                    <button className='notary-edit-btn' onClick={()=>{select=value.agent_id;setCreate(false);setEdit(true);setDelete(false)}}><CiEdit size={25}/></button>
                                    {""}
                                    <button className='notary-delete-btn' onClick={()=>{select=value.agent_id;setCreate(false);setEdit(false);setDelete(true)}}><AiOutlineDelete size={25}/></button>
                                </div>
                                </td>
                               
      
                           </tr>
                        )
                
      
                      })}
              </tbody>
          </table>  
      </div>

      </>}
      {create==true && edit==false && del==false && <>
      <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
      <CreateNotary/></>}
      {create==false && edit==true && del==false && <> 
      <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
      <EditNotary select={select}/>
      </>}
      {create==false && edit==false && del==true &&<>
      <button className="actn-btn-cancel" onClick={()=>{setCreate(false);setEdit(false);setDelete(false)}}><RiArrowGoBackLine/>Back</button>
      <DeleteNotary select={select}/></>}

      </>
 )
}
   
