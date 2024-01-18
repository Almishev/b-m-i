
import React  from 'react';
import ResponsiveAppBar from './Nav';
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Bmi from "./Bmi"
import MyAccordion from './MyAccordion';


import { Route, Routes } from "react-router-dom";
import Footer from './Footer';

function App() {

  return (
    <>
    <ResponsiveAppBar/>
    <div className="container">
        <Routes>
        <Route index element ={<Home/>} />
        <Route path="/Тренировки" element={<MyAccordion />} />
         <Route path="/Индекс телесна маса" element={<Bmi />} />
          <Route path="/Начало" element={<Home />} />
          <Route path="/Цени" element={<Pricing />} />
          <Route path="/За нас" element={<About />} />
        </Routes>
      </div>
    <Footer/>
    </>
  )
}


export default App;