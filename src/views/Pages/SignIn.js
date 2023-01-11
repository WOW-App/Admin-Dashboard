import React,{useState} from "react";
import axios from "axios";
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
var phone=null;
var mobile=null;
var otp=null;
var logID=null;
var token=null;



function phoneNo(e){
  phone=e.target.value
  mobile=phone

}
function otpField(e){
  otp=e.target.value
  console.log(otp)
}

function checkAdmin(){
  var config = {
    method: 'get',
    url: 'https://development.wowapp.tech/dash/user',
    headers: { 
      'Authorization': token, 
      'Content-Type': 'application/json', 
      
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
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
    console.log(JSON.stringify(response.data));
    logID=(response.data.LogID)
    console.log("log id is",logID)
  })


}

function otpVerify(){
  
  console.log("otp is",logID,otp,typeof(mobile))
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
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    token=response.data.token
    if(response.data.otp_valid==true){
      console.log("you are now member of wow")
      checkAdmin()
    }
  })
  
}

function SignIn() {
  // Chakra color mode

  const [otp,setOtp]=useState(false);
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
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
              fontSize='x1'
              color={textColor}
              fontWeight='bold'
              textAlign='center'
              mb='28px'>
              Admin Portal
            </Text>
            
            
            {/* <HStack spacing='15px' justify='center' mb='22px'>
              <Flex
                justify='center'
                align='center'
                w='75px'
                h='75px'
                borderRadius='8px'
                border={useColorModeValue("1px solid", "0px")}
                borderColor='gray.200'
                cursor='pointer'
                transition='all .25s ease'
                bg={bgIcons}
                _hover={{ bg: bgIconsHover }}>
                <Link href='#'>
                  <Icon as={FaFacebook} color={colorIcons} w='30px' h='30px' />
                </Link>
              </Flex>
              <Flex
                justify='center'
                align='center'
                w='75px'
                h='75px'
                borderRadius='8px'
                border={useColorModeValue("1px solid", "0px")}
                borderColor='gray.200'
                cursor='pointer'
                transition='all .25s ease'
                bg={bgIcons}
                _hover={{ bg: bgIconsHover }}>
                <Link href='#'>
                  <Icon
                    as={FaApple}
                    color={colorIcons}
                    w='30px'
                    h='30px'
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
              <Flex
                justify='center'
                align='center'
                w='75px'
                h='75px'
                borderRadius='8px'
                border={useColorModeValue("1px solid", "0px")}
                borderColor='gray.200'
                cursor='pointer'
                transition='all .25s ease'
                bg={bgIcons}
                _hover={{ bg: bgIconsHover }}>
                <Link href='#'>
                  <Icon
                    as={FaGoogle}
                    color={colorIcons}
                    w='30px'
                    h='30px'
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
            </HStack> */}
            {/* <Text
              fontSize='lg'
              color='gray.400'
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              or
            </Text> */}
            {otp==false && 
            <div className="phone-number">
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Phone Number
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Your full name'
                mb='24px'
                size='lg'
                onChange={(e)=>{phoneNo(e)}}
              />
              <Button
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
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
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
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'
                onClick={()=>{otpVerify()}}>
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
                  color='blue'
                  as='span'
                  ms='5px'
                  href='http://www.google.com'
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
    </Flex>
  );
}

export default SignIn;
