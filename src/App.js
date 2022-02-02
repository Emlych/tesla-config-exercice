import "./App.css";
import Select from "./Select";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (value, status) => {
    setIsActive(!isActive);
    if (status) {
      setPrice(price + value);
    }
  };
  return (
    <div className="app">
      <h1>Tesla config</h1>
      <Select
        product="votre véhicule"
        property1="Grande autonomie"
        property2="Performance"
        price1={10}
        price2={2}
        handleClick={handleClick}
        isActive={isActive}
      />

      <Select
        product="la couleur"
        property1="Blanc nacré multicouches"
        property2="Noir uni"
        price1={0}
        price2={1000}
        handleClick={handleClick}
        isActive={isActive}
      />
      <div className="total">
        <div className="price">{price} €</div>
        <button className="blue-button">Buy !</button>
      </div>
    </div>
  );
}

export default App;
