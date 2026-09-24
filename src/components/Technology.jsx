function Technology({ name, specyfikacja, cechy }) {
  return (
    <section>
      <h1>Technologia {name.name}</h1>
      <p>Kategoria: {name.category}</p>
      <p>Liczba godzin: {name.hours}</p>
      <p>
        Specyfikacja: {specyfikacja.type} {specyfikacja.lang}
      </p>
      <p>Features: {cechy[0].comps}</p>
    </section>
  );
}

export default Technology;
