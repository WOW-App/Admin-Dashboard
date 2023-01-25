import Sidebar from "components/Sidebar/Sidebar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './favicon.png'
import './Dashboard.css';
import Hamburger from 'hamburger-react';

import Notaries from "notaries";
import Marketplace from "marketplace";
import {BiArrowFromLeft} from "react-icons/bi";
import axios from "axios";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import List from "views/Pages/list";
import NotaryList from "views/Pages/notaryList";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
  PersonIcon,
  SettingsIcon,
  SupportIcon,
  RocketIcon
} from "components/Icons/Icons.js";
import React, { useState } from "react";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import { useEffect } from "react";
import { FaWindowMinimize } from "react-icons/fa";
var admin=true;



function logout(){
  localStorage.setItem('Token',null);
  localStorage.setItem('Admin',false);
  admin=JSON.parse(localStorage.getItem('Admin'))
}


  
  



export default function Dashboard() {
  const [usercount,setUsercount]=useState(0);
  const [notariescount,setNotariescount]=useState(0);
  const [marketpcount,setMarketpcount]=useState(0);
  useEffect(()=>{
    function data(){
      
      var config = {
        method: 'get',
        url: 'http://localhost:6969/api/user/count',
        headers: { 
          'Cookie': 'connect.sid=s%3AIKXKRINJ7qGKDO4Jg4hAFYtjSrDQIQWc.ir6iQKxm%2FkK99Rde8TJGhZemZEquUXuB2WQooDmDlo4'
        }
      };
      
      axios(config)
      .then(function (response) {
        setUsercount(JSON.stringify(response.data.users));
        console.log("users are",{usercount})
      })
      .catch(function (error) {
        console.log(error);
      });

      var config = {
        method: 'get',
        url: 'http://localhost:6969/api/notary/count',
        headers: { 
          'Cookie': 'connect.sid=s%3AIKXKRINJ7qGKDO4Jg4hAFYtjSrDQIQWc.ir6iQKxm%2FkK99Rde8TJGhZemZEquUXuB2WQooDmDlo4'
        }
      };
      
      axios(config)
      .then(function (response) {
        setNotariescount(JSON.stringify(response.data.notaries));
        console.log("notariescount are",{notariescount})
      })
      .catch(function (error) {
        console.log(error);
      });

      var config = {
        method: 'get',
        url: 'http://localhost:6969/api/marketplace/count',
        headers: { 
          'Cookie': 'connect.sid=s%3AIKXKRINJ7qGKDO4Jg4hAFYtjSrDQIQWc.ir6iQKxm%2FkK99Rde8TJGhZemZEquUXuB2WQooDmDlo4'
        }
      };
      
      axios(config)
      .then(function (response) {
        setMarketpcount(JSON.stringify(response.data.marketplace));
        console.log("marketpcount are",{marketpcount})
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    data()

  },[])
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const [user,setUser]=useState(false);
  const [notary,setNotary]=useState(false);
  const [marketplace,setMarketplace]=useState(false);

  const { colorMode } = useColorMode();

  return (
    <>
    {/* <Sidebar/> */}
    <div>
      <Navbar bg="primary" variant="dark" className="nav-main">
      
      <img src={Logo} className="logo"></img>  
        <Container className="cont">
          <div>
          <Navbar.Brand href="#home" onClick={()=>{setUser(false);setNotary(false);setMarketplace(false)}}>
           
            <strong>World Of Wealth </strong>| admin panel</Navbar.Brand>
            </div>
            <div>
          <Nav className="me-auto">
            <Nav.Link  href="#users" onClick={()=>{ console.log("admin in dahboard is",admin);setUser(true);setNotary(false);setMarketplace(false)}}><strong>USERS</strong></Nav.Link>
            <Nav.Link href="#notaries" onClick={()=>{setUser(false);setNotary(true);setMarketplace(false)}}><strong>NOTARIES</strong></Nav.Link>
            <Nav.Link href="#marketplace" onClick={()=>{setUser(false);setNotary(false);setMarketplace(true)}}><strong>MARKETPLACE</strong></Nav.Link>
            <Nav.Link ></Nav.Link>
            
            
          </Nav>
          
          </div>
         
        </Container>
        <PersonIcon h={"36px"} w={"36px"} color="rgb(2, 117, 216)" background="white" borderRadius="10%"/>
        <button className="logout-btn" onClick={()=>{logout(); window.location.reload()}}><div>Logout </div><div className="logout-icon"><BiArrowFromLeft/></div></button>
      </Navbar></div>
    {user==false && notary==false && marketplace==false && admin==true && <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Active Users
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                   {usercount}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +3.48%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Active Notaries
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                   {notariescount}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <RocketIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +5.2%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Admin Access
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    +2,503
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <SupportIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='red.500' fontWeight='bold'>
                -2.82%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Marketplace Products
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                  {marketpcount}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +8.12%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
          p='0px'
          maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold' mb='6px'>
              Sales Overview
            </Text>
            <Text color='#fff' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                (+5) more{" "}
              </Text>
              in 2022
            </Text>
          </Flex>
          <Box minH='300px'>
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
              PERFORMANCE
            </Text>
            <Text color={textColor} fontSize='lg' fontWeight='bold'>
              Total orders
            </Text>
          </Flex>
          <Box minH='300px'>
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
          </Box>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Page visits
              </Text>
              <Button variant='primary' maxH='30px'>
                SEE ALL
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Page name
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Visitors
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Unique users
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Bounce rate
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          fontWeight='bold'
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}>
                          {el.pageName}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}>
                          {el.visitors}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}>
                          {el.uniqueUsers}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}>
                          {el.bounceRate}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Social traffic
              </Text>
              <Button variant='primary' maxH='30px'>
                SEE ALL
              </Button>
            </Flex>
          </Flex>
          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color='gray.400' borderColor={borderColor}>
                    Referral
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    Visitors
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {socialTraffic.map((el, index, arr) => {
                  return (
                    <Tr key={index}>
                      <Td
                        color={textTableColor}
                        fontSize='sm'
                        fontWeight='bold'
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}>
                        {el.referral}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize='sm'
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}>
                        {el.visitors}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize='sm'
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}>
                        <Flex align='center'>
                          <Text
                            color={textTableColor}
                            fontWeight='bold'
                            fontSize='sm'
                            me='12px'>{`${el.percentage}%`}</Text>
                          <Progress
                            size='xs'
                            colorScheme={el.color}
                            value={el.percentage}
                            minW='120px'
                          />
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Card>
      </Grid>
    </Flex>}
    {admin==true && user==true  && notary==false && marketplace==false && <List/>}
    {admin==true && user==false  && notary==true && marketplace==false && <NotaryList/>}
    {admin==true && user==false  && notary==false && marketplace==true && <Marketplace/>}
    </>
  );
}
