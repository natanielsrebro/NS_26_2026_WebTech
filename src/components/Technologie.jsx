const technologies = [
  {
    id: 1,
    name: "HTML",
    category: "Frontend",
    hours: 20
  },
  {
    id: 2,
    name: "CSS",
    category: "Frontend",
    hours: 25
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    hours: 40
  },
  {
    id: 4,
    name: "Express",
    category: "Backend",
    hours: 25
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Baza danych",
    hours: 20
  }
];

function Technology({ name, category, hours }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {technologies.map((technology) => (
        <Technology
          key={technology.id}
          name={technology.name}
          category={technology.category}
          hours={technology.hours}
        />
      ))}
    </div>
  );
}

export default App;
