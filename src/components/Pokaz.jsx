function Pokaz({name}) {

  function showTechnology() {
    console.log("Wybrano: " + name);
  }

  return (
    <section>
      <h2>{name}</h2>
    <button onClick={showTechnology}>
      Pokaż technologię
    </button>
    </section>
  );
}
export default Pokaz