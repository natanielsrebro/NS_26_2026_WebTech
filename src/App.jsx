import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje imię i nazwisko",
    technologiesCount: 3
  };
  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };
  const student = {
    name: "Nataniel",
    surname: "Srebro",
    className: "4P",
    specialization: "technik programista"
  };

  const course = {
    name: "ZAW",
    teacher: "Rafał Taraszka",
    hours: 8,
    completed: 8 
  };

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>
      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <h1>{technology.name}</h1>
      <p>{technology.category}</p>
      <p>{technology.hours}</p>
      <p>{technology.active}</p>

      <h2>Uczeń: {student.name} {student.surname}</h2>
      <h2>Klasa: {student.className}</h2>
      <h2>Kierunek: {student.specialization}</h2>

      <section>
        <h3>{course.name}</h3>
        <h3>{course.teacher}</h3>
        <h3>{course.hours}</h3>
        <h3>{course.completed}</h3>
      </section>
     

    </div>
  );
  
}



export default App
