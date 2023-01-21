
import axios from "axios";
import React from "react";
var token = null;
import 'bootstrap/dist/css/bootstrap.min.css';
import './userDelete.css';
var id=null;
var data=null;
function takeId(e){
    id=e.target.value;      
    // console.log("id is",id);
    
    
}
async function getUser(){
    
   console.log("token is",token)
   data=JSON.stringify({
    "id":1,
    "firstname":"kunal"
    
   })
    token=await JSON.stringify(localStorage.getItem('Token'))
   console.log("id is",id);
   console.log("data is",data)
    var config = {
                method: 'POST',
                url: 'http://localhost:6969/api/user/update',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzQxMTAwMTN9.X_Ssu9Yf_BRIm9xWujaMFKv-NcQT59WaqYQcXUdacxg",
                  'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
                },
                 data:data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                setUser((response.data));
                // console.log("post is",post)
              })
              .catch(function (error) {
                console.log(error);
              });
}

export default function EditUser() {
    const [user,setUser]=React.useState(null);
    const [show,setshow]=React.useState(false);

    // React.useEffect(() => {
    //     var config = {
    //         method: 'POST',
    //         url: 'http://localhost:6969/user/delete',
    //         headers: { 
    //           'Authorization': token,
    //           'Cookie': 'connect.sid=s%3AEsIejijfclbeQ_J0fpUkqm61GzdoJYzH.w8vbzDyih6JEocfSjnWpC%2BdTt4bjYJkNz8j645UlQNU'
    //         },
    //         data:{
    //             id:id
    //         }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         //console.log(JSON.stringify(response.data.data));
    //         setPost((response.data));
    //         console.log("post is",post)
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
          
    //   }, []);
    

    // if (!post) return null;

    
    return (
        <>
        
        <div className="del-form">
            <div className="del-user-data">
           
            {/* <label>UserID</label>
            <input type="number" class="form-control" id="inputPassword" placeholder="id of user" onChange={(e)=>{takeId(e)}}></input> */}
             </div>
            {show==true && <div className="user-detail"> { Object.entries(user.userdata).map(([key, value], i) => {
        
        return (
         <div>
           
                  
                 <form>
                     <div class="form-group row">
                       <label for="inputPassword" class="col-sm-2 col-form-label">{key}</label>
                       <div class="col-sm-10">
                         <input type="text" class="form-control" id="inputPassword" placeholder={value}></input>
                       </div>
                       
                     </div>
                   </form>
             
      
         </div>
       
         )})} </div>}
            
            <button className="act-btn" onClick={()=>{getUser();if(user){setshow(true)}}}>Update User</button>
           

        </div>
    
     
    {/* { Object.entries(post.userdata[6]).map(([key, value], i) => {
        
           return (
            <div>
              
                     
                    <form>
                        <div class="form-group row">
                          <label for="inputPassword" class="col-sm-2 col-form-label">{key}</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder={value}></input>
                          </div>
                          
                        </div>
                      </form>
                
         
            </div>
          
            )})} */}

</>
    
     
    )
}
    


