const technologies = [
  {
    id: 1,
    name: "JavaScript",
    category: "programowanie"
  },
  {
    id: 2,
    name: "React",
    category: "biblioteka"
  },
  {
    id: 3,
    name: "HTML",
    category: "frontend"
  }
];

function Technologies() {
  return (
    <section className="technologies">
      <h2>Technologie</h2>

      <p>
        {technologies[0].name} - {technologies[0].category}
      </p>

      <p>
        {technologies[1].name} - {technologies[1].category}
      </p>

      <p>
        {technologies[2].name} - {technologies[2].category}
      </p>
    </section>
  );
}

export default Technologies;
