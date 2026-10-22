import { useState } from "react";

function Info() {

  const [active, setActive] = useState(true);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        Zmień
      </button>

      <p>Stan active: {active ? "aktywny" : "nieaktywny"}</p>
    </div>
  );
}
export default Info;