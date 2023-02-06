<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

import axios from "axios";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";


var options = [
    "one", "two", "three"
];
const defaultOption = options[0];

var token = null;
import 'bootstrap/dist/css/bootstrap.min.css';

// var id=null;
// var data=null;
// const formData=new FormData();
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjkzNDAwMTc3NjMiLCJpYXQiOjE2NzEwODI4ODh9.efnPMsw_EMn7nNYvjYbgAr3XSnJYI1Q2fVd8hjp-tFs");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     redirect: 'follow'
//   };







var config2 = {
    method: 'GET',
    url: "http://localhost:6969/api/notary_user/all",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjgzMjkwNjAwMDkiLCJpYXQiOjE2NzQzMDE2MDh9.luC88RN3PChVgh7V9lDWBzC89mzg5C-lXgAPKVdzySU",
        'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
    },

};



export default function UpdateAppointment(props) {


    const ids = props.notId;

    const baseURL = "http://localhost:6969/api/appointment/details";
    var dataObj = { id: null }
    dataObj.id = ids;
    const data = JSON.stringify(dataObj);
    //console.log(data)


    var config = {
        method: 'POST',
        url: baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjgzMjkwNjAwMDkiLCJpYXQiOjE2NzQzMDE2MDh9.luC88RN3PChVgh7V9lDWBzC89mzg5C-lXgAPKVdzySU",
            'Cookie': 'connect.sid=s%3A5d2QrM35ucZ_FHzJP9y6kkxTdAlMaxxM.VwFiBktnA2BUBHPwZyZTD82GgrK0fh%2FL6jme9axj7rg'
        },
        data: data
    };

    const [post, setPost] = React.useState(0)
    const [post2, setPost2] = React.useState(0)

    React.useEffect(() => {

        axios(config).then((response) => {
            setPost(response.data.appod)
        });


        axios(config2).then((response) => {
            setPost2(response.data.data)
        });

        {
            Object.entries(post2).map(([key, value], i) => {
                var d = (value.name, value.id, "+", value.agent_id)
                options.push(d)

            })
        }

    }, [])


    var appointdata = {
        userId: null
    }
    async function appointnotary(idd) {
       // appointdata.userId = idd;
       // var datan = JSON.stringify(appointdata);
        console.log(appointdata,idd,"this is checking")
    }

    // 

    return (


        <div>

            <h1>welcome to update page</h1>

            <table class="table table-light table-hover" striped bordered hover variant="dark">

                <tbody>
                    <tr>
                        <th className="table-id" id="th">Notary Id</th>
                        <th className="table-licence" id="th"> Address</th>
                        <th className="table-fullname" id="th">User ID</th>
                        <th className="table-address" id="th"> Appointment ID</th>
                        <th className="table-phone" id="th">HomeVisit</th>
                        <th className="table-email" id="th"> Status</th>
                        <th className="table-aadhar" id="th"> Time</th>
                        <th className="table-aadhar" id="th"> Time</th>
                        <th className='rec-op'>Appoint</th>

                    </tr>
                    {Object.entries(post).map(([key, value], i) => {
                        return (
                            <tr class="align-center ">
                                <td className="table-id" >{value.id}</td>
                                <td className="table-fullname">{value.address}</td>
                                <td className="table-fullname">{value.userId}</td>
                                <td className="table-email">{value.appointmentId}</td>
                                <td className="table-name">{value.homeVisit}</td>
                                <td className="table-dob">{value.status}</td>
                                <td className="table-wh">{value.time}</td>
                                <td className="table-wh">{value.date}</td>
                                <Dropdown options={options}  onBlur={(e)=>{appointdata.userId=e.target.options}}    placeholder="Select an option" />;
                            </tr>
                        )
                    })}
                </tbody>
                <tbody ><div className='rec-btn ' class="padding 10">
                    <button className='btn btn-success' value={props.select} onClick={() => { appointnotary(appointdata) }}></button>

                </div></tbody>,

            </table>

        </div>
    )

}
