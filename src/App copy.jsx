import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import Technology from './components/Technology.jsx';
import Student from './components/Student.jsx';
import Navigation from './components/Navigation.jsx';
import InfoBox from './components/InfoBox.jsx';
import CourseCard from './components/CourseCard.jsx';
import Technologies from './components/Tablice.jsx';

function App() {
  const specification ={
    lang:"javascript",
    type:"frontend"
  }
  const features=[
    {
      comps:"komponenty "
    },
    
    {
      jsx:"jsx"
    },
    {
      props:"props"
    }

  ];
  
  return (
    <>
      

        <Technology name="react" category="frontend" hours={10} specyfikacja={specification} cechy={features}/>

        <Technology name = "PHP" category="backend" hours={40} specyfikacja={specification} cechy={features}/>

        <Technology name="JavaScript" category="frontend" hours={30} specyfikacja={specification} cechy={features}/>

        <Technology name="Angular" category="frontend" hours={15} specyfikacja={specification} cechy={features}/>

        <Technology name="Mysql" category="backend" hours={20} specyfikacja={specification} cechy={features}/>

      
    </>
  );
  
}


export default App
