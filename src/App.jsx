import './App.css';
import Technology from './components/Technology.jsx';
import Pokaz from './components/Pokaz.jsx';
import Product from './components/product.jsx';

function App() {
  function selectProduct(name) {
    console.log("Wybrano produkt: " + name);
  }

  return (
    <section>
      <Pokaz name="React" />

      <Product
        name="Laptop"
        price={3500}
        selectProduct={selectProduct}
      />
    </section>
  );
}

export default App;
