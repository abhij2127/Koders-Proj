import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from  "react-router-dom";

const SideNav = () => {
  return (
    <>
    <nav className ="sidenav">
    <ul className="navBar">
    <li class="navHead">Shards DashBoard</li>
    <li id="dashlink" onClick='changeC("dashlink")'><Link to ="/dash">Blog Dashboard</Link></li>
    <li><Link to ="/posts">Blog Posts</Link></li>
    <li><Link to ="/newposts">Add New Post</Link></li>
    <li><Link to ="/frms">Forms & Components</Link></li>
    <li><Link to ="/tbls">Tables</Link></li>
    <li><Link to ="/usr">User Profile</Link></li>
    <li><Link to ="/err">Errors</Link></li>
    </ul>
    </nav>
    <Outlet />
    </>
  )
}
export default SideNav;
