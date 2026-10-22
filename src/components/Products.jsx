import { useState } from "react";

function Technology({ name, category, hours, image }) {
  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);
  const [visible, setVisible] = useState(false);

  function toggleDetails() {
    setVisible(!visible);
  }

  function showTechnology() {
    console.log("Technologia: " + name);
    console.log("Kategoria: " + category);
    console.log("Czas nauki: " + hours + " godz.");
  }

  function showName(technologyName) {
    console.log(technologyName);
  }

  return (
    <article className="technology-card">
      <img
        src={`${import.meta.env.BASE_URL}images/${image}`}
        alt={`Logo technologii ${name}`}
      />
      <h3>{name}</h3>

      <button onClick={toggleDetails} aria-expanded={visible}>
        {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
      </button>

      {visible && (
        <div className="technology-details">
          <span className="technology-badge">{category}</span>
          <p>Czas nauki: {hours} godz.</p>
        </div>
      )}

      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
      <button onClick={() => setLikes(0)}>Resetuj polubienia</button>

      <p>{isLearning ? "Uczę się" : "Jeszcze nie uczę się"}</p>
      <button onClick={() => setIsLearning(!isLearning)}>
        Zmień status nauki
      </button>

      <button onClick={showTechnology}>Pokaż informacje w konsoli</button>
      <button onClick={() => showName(name)}>Wypisz nazwę</button>
    </article>
  );
}

export default Technology;