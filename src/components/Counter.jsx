import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  function add5() {
    setCount(count + 5);
  }

  function subtract5() {
    setCount(count - 5);
  }

  function set100() {
    setCount(100);
  }

  return (
    <div>
      <p>Licznik: {count}</p>

      <button onClick={add}>Zwiększ</button>
      <button onClick={subtract}>Zmniejsz</button>
      <button onClick={reset}>Reset</button>
      <button onClick={add5}>Zwiększ o 5</button>
      <button onClick={subtract5}>Zmniejsz o 5</button>
      <button onClick={set100}>ustaw 100</button>
    </div>
  );
}


export default Counter;
