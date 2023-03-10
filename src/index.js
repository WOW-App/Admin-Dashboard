/*!

=========================================================
* Argon Dashboard Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-chakra
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-chakra/blob/master/LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route,Router, Switch, Redirect } from "react-router-dom";
import SignIn from "views/Pages/SignIn";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js"; // Chakra imports
import { ChakraProvider } from "@chakra-ui/react";

// Custom Chakra theme
import theme from "theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
  
    <SignIn/>
   
  </ChakraProvider>,
  document.getElementById("root")
);
