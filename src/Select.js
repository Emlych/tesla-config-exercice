import React from "react";

const Select = (props) => {
  return (
    <div className="selection">
      <p className="selection--property">Sélectionnez {props.product}</p>
      <button
        className={props.isActive ? "active" : ""}
        onClick={() => props.handleClick(props.price1, props.isActive)}
      >
        {props.property1} - {props.price1} €
      </button>
      <button
        className={!props.isActive ? "active" : ""}
        onClick={() => props.handleClick(props.price2, props.isActive)}
      >
        {props.property2} - {props.price2} €
      </button>
    </div>
  );
};

export default Select;
