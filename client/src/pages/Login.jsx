import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {

  return (
    <>
      <Header className = "header" text = "Login"/>
      <Footer />
    </>
  );
};

export default Login;