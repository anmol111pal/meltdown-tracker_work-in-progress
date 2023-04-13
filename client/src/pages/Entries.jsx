import React, { useState, useEffect } from "react";
import "./Entries.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Entries = () => {

  return (
    <>
      <Header className = "header" text = "All Entries"/>
      <Footer />
    </>
  );
};

export default Entries;