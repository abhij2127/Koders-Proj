import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./pages/sidenav.js";
import Layout from "./pages/layout.js";
import Dashboard from "./pages/dash.js";

export default function App(){
  return(
    <Router>
    <div className="container">
      <SideNav />
      <div className="content">
      <Layout />
      <Routes>
        <Route path="/dash" element = {<Dashboard />} />
      </Routes>
      </div>
      </div>

    </Router>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));
