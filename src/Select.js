import React from "react";

const Select = (props) => {
  return (
    <div className="selection">
      <p className="selection--property">Sélectionnez {props.product}</p>
      <button onClick={() => props.changePrice(props.price1)}>
        {props.property1} - {props.price1} €
      </button>
      <button onClick={() => props.changePrice(props.price2)}>
        {props.property2} - {props.price2} €
      </button>
    </div>
  );
};

export default Select;
