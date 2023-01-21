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

export default function Marketplace(){
    const [market,setMarket]=React.useState([]);
    const [create,setCreate] = React.useState(false)
    const [edit,setEdit] = React.useState(false)
    const [del,setDelete] = React.useState(false)
    const [edito,setEdito] = React.useState(false)
    const [delo,setDeleteo] = React.useState(false)
    
    
    
    useEffect(()=>{
      var config = {
        method: 'get',
        url: 'http://localhost:6969/api/marketplace/all',
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
        <div className="func-btn">
          <button className="action-btn" onClick={()=>{setCreate(true)}}>
            <BiPlus/> Add a product 
          </button>
          <button className="action-btn"  onClick={()=>{setEdit(true)}}>
          <BiWrench/> Edit a product 
          </button>
          <button className="action-btn"  onClick={()=>{setDelete(true)}}>
          <BiTrash/> Delete a product 
          </button>
        </div>
        <h1 className="heading">Products Present In Marketplace :</h1>
        {Object.entries(market).map(([key, value], i) => {
                        return(
                            <div className="product-card">
                              {edito==false && delo==false && <>
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
                                       <button className="actn-btn-edit" onClick={()=>{setEdito(true);setDeleteo(false)}}><CiEdit size={25}/></button>
                                       <button className="actn-btn-delete" onClick={()=>{setEdito(false);setDeleteo(true)}}><AiOutlineDelete size={25}/></button>
                                     </div>
                                 </div>
                              </>}
                              {edito==true && delo==false && <>
                                <h1>Edit</h1>
                                <div className="actn-btn">
                                       
                                       <button className="actn-btn-delete" onClick={()=>{setEdito(false);setDeleteo(false)}}><RiArrowGoBackLine size={25}/></button>
                                     </div>
                              </>}
                              {edito==false && delo==true && <>
                                <h1>Delete</h1>
                                <div className="actn-btn">
                                       
                                       <button className="actn-btn-delete" onClick={()=>{setEdito(false);setDeleteo(false)}}><RiArrowGoBackLine size={25}/></button>
                                     </div>
                              </>}
                                    
       
                             </div>
                       )
                
      
                      })}  </>}

{create==true && edit ==false && del==false &&<><CreateProduct/></>}
{create==false && edit ==false && del==true &&<><DeleteProduct/></>}
{create==false && edit ==true && del==false &&<><EditProduct/></>}

                    
        

        </>


    )
    }
   
}