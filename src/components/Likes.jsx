import { useState } from "react";

function Technology({ name }) {
  
  const [likes, setLikes] = useState(0);

 
  const [isLearning, setIsLearning] = useState(false);

  return (
    <article>
      <h2>{name}</h2>

      
      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>

      
      <button onClick={() => setLikes(0)}>
        Resetuj polubienia
      </button>

      
      <p>Status: {isLearning ? "Uczę się" : "Jeszcze nie uczę się"}</p>
      <button onClick={() => setIsLearning(!isLearning)}>
        Zmień status nauki
      </button>
    </article>
  );
}

export default Technology;