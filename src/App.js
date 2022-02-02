import "./App.css";
import Select from "./Select";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);

  const handleClick1 = (option1, optionPrice1) => {
    setOption1(option1);
    setPrice(price + optionPrice1);
  };
  const handleClick2 = (option2, optionPrice2) => {
    setOption2(option2);
    setPrice(price + optionPrice2);
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
        handleClick1={handleClick1}
        option1={option1}
      />

      <Select
        product="la couleur"
        property1="Blanc nacré multicouches"
        property2="Noir uni"
        price1={0}
        price2={1000}
        handleClick2={handleClick2}
        option2={option2}
      />
      <div className="total">
        <div className="price">{price} €</div>
        <button className="blue-button">Buy !</button>
      </div>
    </div>
  );
}

export default App;
