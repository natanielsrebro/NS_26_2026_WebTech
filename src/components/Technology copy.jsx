function Technology(props) {
  return (
    <section>
      <h1>Technologia {props.name} </h1>
      <p>kategoria {props.category}</p>
      <p>Liczba godzin {props.hours}</p>
      <p>specyfikacja  {props.specyfikacja.type} {props.specyfikacja.lang}</p>
      <p>features  {props.cechy[0].comps}</p>
    </section>
  );
}

export default Technology;