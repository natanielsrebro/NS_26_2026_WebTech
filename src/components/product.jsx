function Product({ name, price, selectProduct }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Cena: {price} zł</p>

      <button onClick={() => selectProduct(name)}>
        Pokaż produkt
      </button>
    </div>
  );
}

export default Product;
