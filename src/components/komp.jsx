import React from 'react';
// import './TechnologyList.css';

const technologies = [
  { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
  { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
  { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
  { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
  { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
  { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
  { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
  { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
  { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
];

function TechnologyList() {
  
  const getBadgeClass = (category) => {
    switch (category) {
      case 'Frontend':
        return 'badge badge-frontend';
      case 'Backend':
        return 'badge badge-backend';
      case 'Baza danych':
        return 'badge badge-database';
      default:
        return 'badge';
    }
  };

  return (
    <section className="tech-container">
      {technologies.map((tech) => (
        <article key={tech.id} className="tech-card">
          <div className="tech-image-wrapper">
            <img 
              src={`/images/${tech.image}`} 
              alt={tech.name} 
              className="tech-image" 
            />
          </div>
          <div className="tech-content">
            <span className={getBadgeClass(tech.category)}>
              {tech.category}
            </span>
            <h3 className="tech-title">{tech.name}</h3>
            <p className="tech-hours">
              Czas nauki: <strong>{tech.hours} godz.</strong>
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default TechnologyList;