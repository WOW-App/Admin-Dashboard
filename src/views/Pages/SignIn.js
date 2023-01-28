import React,{useState} from "react";
import axios from "axios";
import './SignIn.css'
import Dashboard from "../Dashboard/Dashboard";


// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { move } from "react-big-calendar";
var phone=null;
var mobile=null;
var otp=null;
var logID=null;
var token=null;
var check=null;
var name=null;




function phoneNo(e){
  phone=e.target.value
  mobile=phone

}
function otpField(e){
  otp=e.target.value
  
}

function checkAdmin(){
  //console.log("token is",token)
  var config = {
    method: 'get',
    url: 'https://development.wowapp.tech/dash/user',
    headers: { 
      'Authorization': token, 
      'Content-Type': 'application/json', 
      
    }
  };
  
  axios(config)
  .then(async function (response) {
   // console.log(JSON.stringify(response.data));
    var roles=(response.data.userdata.roles);
    // console.log(roles.length)
    for(let i=0;i<roles.length;i++){
      // console.log(roles[i])
      if(roles[i].role=="admin"){
        check=true;
              
        break;
      }
     
    }
  })
}
function otpLogin(phone){
  
  var data = JSON.stringify({
    "mobile":mobile
  });
  
  var config = {
    method: 'post',
    url: 'https://development.wowapp.tech/api/auth/otp/gen',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
    logID=(response.data.LogID)
    //console.log("log id is",logID)
  })


}

async function otpVerify(){
  
  //console.log("otp is",logID,otp,typeof(mobile))
  var data = JSON.stringify({
    "LogID":  logID,
    "otp":otp,
    "phone": mobile
  });
  
  var config = {
    method: 'post',
    url: 'https://development.wowapp.tech/api/auth/otp/verify',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  await axios(config)
  .then(async (response)=> {
    //console.log(JSON.stringify(response.data));
    name=response.data.user.fullName;
    token="Bearer "+(response.data.token)
    if(response.data.otp_valid==true){
      //aconsole.log("you are now member of wow")
      checkAdmin()
    }
  })
  
}

function setLocalstorage(){
  if(!localStorage.getItem('Admin')){
    localStorage.setItem('Admin',false);
  
  }
  if(!localStorage.getItem('Token')){
    localStorage.setItem('Token',null);
  
  }
  if(!localStorage.getItem('Name')){
    localStorage.setItem('Token',null);
  
  }
  return;
}


function SignIn() {
  // Chakra color mode
  setLocalstorage();
  
  

  var signin=JSON.parse(localStorage.getItem('Admin'));
  const [otp,setOtp]=useState(false);
  const [admin,setAdmin]=useState(signin);
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  

  return (
    <>
    
    {admin==false && 
     <Flex position='relative' mb='40px'>
     <Flex
       minH={{ md: "1000px" }}
       h={{ sm: "initial", md: "75vh", lg: "85vh" }}
       w='100%'
       maxW='1044px'
       mx='auto'
       justifyContent='space-between'
       mb='30px'
       pt={{ md: "0px" }}>
       <Flex
         w='100%'
         h='100%'
         alignItems='center'
         justifyContent='center'
         mb='60px'
         mt={{ base: "50px", md: "20px" }}>
         <Flex
           zIndex='2'
           direction='column'
           w='445px'
           background='transparent'
           borderRadius='15px'
           p='40px'
           mx={{ base: "100px" }}
           m={{ base: "20px", md: "auto" }}
           bg={bgForm}
           boxShadow={useColorModeValue(
             "0px 5px 14px rgba(0, 0, 0, 0.05)",
             "unset"
           )}>
           <Text
           className="admin-portal"
             fontSize='40px'
             color={textColor}
             fontWeight='bold'
             textAlign='center'
             mb='22px'>
             Admin Panel
           </Text>
           
           {otp==false && 
           <div className="phone-number">
           <FormControl>
             <FormLabel ms='4px' fontSize='sm' fontWeight='normal' className="phone-no">
               Phone Number
             </FormLabel>
             <Input
               variant='auth'
               fontSize='sm'
               ms='4px'
               type='text'
               placeholder='Your Phone Number'
               mb='24px'
               size='lg'
               onChange={(e)=>{phoneNo(e)}}
             />
             <Button
               className='sent-otp'
               fontSize='10px'
               variant='dark'
               fontWeight='bold'
               w='100%'
               h='45' 
               mb='24px'
               onClick={()=>{ if(phone!=null){phone=phone.split('')}else{phone=" "}; if(phone.length==10){setOtp(true) ; otpLogin(phone)}else{ console.log("enter valid phone number") ; phone=null}}}>
               Send OTP
             </Button>
             </FormControl>
           </div> }

             {otp==true && <div className="otp-verify">
             <FormControl>
             <FormLabel ms='4px' fontSize='sm' fontWeight='normal' className='otp'>
               OTP
             </FormLabel>
             <Input
               variant='auth'
               fontSize='sm'
               ms='4px'
               type='password'
               placeholder='your six digit otp'
               mb='24px'
               size='lg'
               onChange={(e)=>{otpField(e)}}
             />
             <FormControl display='flex' alignItems='center' mb='24px'>
               <Switch id='remember-login' colorScheme='blue' me='10px' />
               <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal' className='remember-me'>
                 Remember me
               </FormLabel>
             </FormControl>
             <Button
               className='otp-signin'
               fontSize='10px'
               variant='dark'
               fontWeight='bold'
               w='100%'
               h='45'
               mb='24px'
               onClick={async()=>{await otpVerify() ; if(check==true){setAdmin(true); console.log(token);localStorage.setItem('Admin',true);localStorage.setItem('Token',JSON.stringify(token));localStorage.setItem('Name',JSON.stringify(name)) }else{localStorage.setItem('Admin',false); console.log("You dont have access to this")} }}>
               SIGN IN
             </Button>
           </FormControl>
           <Flex
             flexDirection='column'
             justifyContent='center'
             alignItems='center'
             maxW='100%'
             mt='0px'>
             <Text color={textColor} fontWeight='medium'>
               
               <Link
                 className="resend-otp"
                 color='blue'
                 as='span'
                 ms='5px'
                 href='#'
                 fontWeight='lighter'
                 textDecoration='underline'
                 onClick={()=>{otpLogin(phone)}}>
                 resend otp
               </Link>
             </Text>
           </Flex>
           
             </div> }
           
             
            
           
         </Flex>
       </Flex>
       <Box
         overflowX='hidden'
         h='100%'
         w='100%'
         left='0px'
         position='absolute'
         bgImage={signInImage}>
         <Box
           w='100%'
           h='100%'
           bgSize='cover'
           bg='blue.500'
           opacity='0.8'></Box>
       </Box>
     </Flex>
   </Flex>}

   {admin==true && <><Dashboard name={name}/></>}
   


</>
  );
}

export default SignIn;
