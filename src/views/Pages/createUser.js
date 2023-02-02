
import axios from "axios";
import React from "react";
var token = localStorage.getItem('Token')
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table'
// import { Button } from "bootstrap";

// <link
//     rel="stylesheet"
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
//     integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
//     crossorigin="anonymous"
// />
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzEwODI4ODh9.efnPMsw_EMn7nNYvjYbgAr3XSnJYI1Q2fVd8hjp-tFs");
// myHeaders.append("Content-Type", "application/json");

// var raw = "";

// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     //body: raw,
//     redirect: 'follow'
// };


// var tmp = "NNNNN";


// const baseURL = "http://localhost:6969/dash/users";


export default function CreateUser() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        var config = {
            method: 'POST',
            url: 'http://localhost:6969/dash/users',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzM0MjIyMTR9.q-_oBdDAJu0lQQvzQ74FRAbV2wBS8bov-E6yfxGQtGs', 
              'Cookie': 'connect.sid=s%3AEsIejijfclbeQ_J0fpUkqm61GzdoJYzH.w8vbzDyih6JEocfSjnWpC%2BdTt4bjYJkNz8j645UlQNU'
            }
          };
          
          axios(config)
          .then(function (response) {
            //console.log(JSON.stringify(response.data.data));
            setPost((response.data));
            console.log("post is",post)
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }, []);
    

    if (!post) return null;

    
    return (
        <>
        <h1>user create</h1>
    
     
    { Object.entries(post.userdata[6]).map(([key, value], i) => {
        
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
          
            )})}

</>
    
     
    )
}
        //  console.log((post)),
        // //i = 0,
        // Object.entries(post.userdata).map(([key, value], i) => {
        //     return (

        //         console.log("posting"),

        //         //     <table class="table table-dark table-hover" striped bordered hover variant="dark">

        //         //     <tbody>
        //         //         <tr class="align-center ">
        //         //         <td>{value.email}</td>
        //         //         <td class="center">{value.phone}</td>
        //         //         <td>{value.dob}</td>
        //         //         <td>{value.tlw}</td>

        //         //         <td>{value.wh}</td>
        //         //         <td>{value.id}</td>
        //         //         <a href="/userupdate.js">update</a>
        //         //         </tr>

        //         //     </tbody>

        //         //   </table>
               
        //         <form>
        //             <input type="text" /> Email
        //         </form>

        //     )
        // }
        // ))
// }











   // import Table from 'react-bootstrap/Table';


