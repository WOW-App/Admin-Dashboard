import axios from "axios";
import React,{ useEffect, useState } from "react";
import './marketplace.css';
import { BiWrench } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

import CreateProduct from "views/Pages/marketplace/createProduct";
import DeleteProduct from "views/Pages/marketplace/deleteProduct";
import EditProduct from "views/Pages/marketplace/editProduct";
var token= localStorage.getItem('Token');
var select=null;
var valObj={};

export default function Marketplace(){
    const [market,setMarket]=React.useState([]);
    const [create,setCreate] = React.useState(false)
    const [edit,setEdit] = React.useState(false)
    const [del,setDelete] = React.useState(false)
    
    
    
    
    useEffect(()=>{
      var config = {
        method: 'get',
        url: 'https://development.wowapp.tech/api/marketplace/all',
        headers: { 
          'Authorization':token,
          'Cookie': 'connect.sid=s%3AjCJUF2lBvYHO3TcIvKWWJr7KLl7xXzje.ZFmku3q2Y3IjZK%2F2cDYGwN8ydWENlrQ%2FgL4axACahbA'
        }
      };
      
      axios(config)
      .then(async  function (response) {
        //console.log(JSON.stringify(response.data.result));
        //const [market,setMarket]=useState(JSON.stringify(response.data));
        setMarket((response.data.result));
        //console.log("market is ",market)
      
      })
      .catch(function (error) {
        console.log(error);
      });
    },[])

    if(!market) return null
    
    else{
      return(
        <>
        {create==false && edit ==false && del==false &&<>
       
        
        <div className="pr-pg-header">
        <p className="pr-pg-heading">Products Present In Marketplace :</p>
        <button className="pr-pg-button" onClick={()=>{setCreate(true) ; setEdit(false) ; setDelete(false)}}>Add a product</button>
        </div>
        {Object.entries(market).map(([key, value], i) => {
                        return(
                            <div className="product-card">
                              
                                <div className="product-logo">
                                     
                                     <img src={value.logo}></img>
                                 </div>
                                 <div className="product-desc">
                                     <h2 className="pr-title"><strong>{value.title}</strong></h2>
                                     <p className="pr-meta">policy id : {value.policyid}</p>
                                     <p className="pr-meta">Cover Amount : Rs.{value.coverage}</p>
                                     <p className="pr-meta">Policy Term  : {value.tenure}</p>
                                     <br/>
                                     <div className="feature">
                                       
                                     <p className="pr-feature"><strong>Features : </strong>{value.features} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    
                                     </div>
                                      
                                     <p ><a href={value.brochure} className="pr-brochure">more details</a></p>
                                 </div>
                                 <div className="product-bp">
                                     <p>Boost Points</p>
                                     <p className="pr-bp">{value.boost_point}</p>
                                     <div className="actn-btn">
                                       <button className="actn-btn-edit" onClick={()=>{valObj=value;select=value.policyid;setEdit(true);setDelete(false);setCreate(false)}}><CiEdit size={25}/></button>
                                       <button className="actn-btn-delete" onClick={()=>{select=value.policyid;setEdit(false);setDelete(true);setCreate(false)}}><AiOutlineDelete size={25}/></button>
                                     </div>
                                 </div>
                              
                              
                                    
       
                             </div>
                       )
                
      
                      })}  
                      
                      </>}

{create==true && edit ==false && del==false &&<>
  <button className="actn-btn-cancel" onClick={()=>{setEdit(false);setDelete(false);setCreate(false)}}><RiArrowGoBackLine size={25}/>Back</button>
   
<CreateProduct/></>}

{edit==true && del==false && create==false &&<>
  <button className="actn-btn-cancel" onClick={()=>{setEdit(false);setDelete(false)}}><RiArrowGoBackLine />Back</button>
    <div className="edit-form">
    <EditProduct select={select} valObj={valObj}/>                            
    </div>
</>}
{edit==false && del==true && create==false &&<>
  <button className="actn-btn-cancel" onClick={()=>{setEdit(false);setDelete(false)}}><RiArrowGoBackLine />Back</button>
     <div className="delete-form">
      <DeleteProduct select={select}/>                                
      </div>
</>}

                    
        

        </>


    )
    }
   
}