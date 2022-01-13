import {Outlet, Link} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
//import SideNav from "./sidenav.js";
const Layout = () => {
  return(
    <>
    <div id ="header">
    <ul>
    <li><input type="text" placeholder="Search for something.."/></li>
    <li className="flag">&#9983;</li>
    <li className="username">Sierra Brooks</li>
    </ul>
    </div>

    <Outlet />
    </>
  )
}

export default Layout;
