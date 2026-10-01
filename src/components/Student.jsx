function Student(props) {
  return (
    <div>
      <p>Imię: {props.name}</p>
      <p>Klasa: {props.className}</p>
      <hr />
    </div>
  );
}

export default Student;
