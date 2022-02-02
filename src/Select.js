import React from "react";

const Select = (props) => {
  return (
    <div className="selection">
      <p className="selection--property">Sélectionnez {props.product}</p>
      <button
        className={props.option1 === 0 ? "active" : ""}
        onClick={() => props.handleClick1(0, props.price1)}
      >
        {props.property1} - {props.price1} €
      </button>
      <button
        className={props.option1 === 1 ? "active" : ""}
        onClick={() => props.handleClick2(1, props.price2)}
      >
        {props.property2} - {props.price2} €
      </button>
    </div>
  );
};

export default Select;
