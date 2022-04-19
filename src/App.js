import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>React UI</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
              <Route path='/' element={<Login />} />
                <Route path="/sign-in" element={<Login/>} />
                <Route path="/sign-up" element={<SignUp/>} />
              <Route />
          </Routes>
        </div>
      </div>
    </div></BrowserRouter>
  );
}

export default App;
