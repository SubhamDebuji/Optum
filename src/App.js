import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
