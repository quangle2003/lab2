import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import Products from "./components/Products";

function App() {
  const titles = ['Home', 'About', 'Shop', 'Contact'];
  return (
    <div>
      <Header titles={titles}/>
      <Slide />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
