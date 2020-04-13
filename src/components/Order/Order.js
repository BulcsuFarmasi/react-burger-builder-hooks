import React from "react";

import classes from "./Order.module.css";

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(ig => (
    <span
      key={ig.name}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 10px",
        border: "1px solid #ccc",
        padding: "5px"
      }}
    >
      {ig.name} ({ig.amount})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
