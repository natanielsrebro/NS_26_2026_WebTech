function Wybierz() {

  function showTechnology(name) {
    console.log("Wybrano: " + name);
  }

  return (
    <button onClick={() => showTechnology("React")}>
      Pokaż technologię
    </button>
  );
}


export default Wybierz