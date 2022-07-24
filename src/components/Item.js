import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdd, setAdd] = useState(false)
  
  const handleClick = () => {
    setAdd(isAdd => !isAdd);
  }

  const buttonValue = isAdd ? "Remove From Cart" : "Add to Cart";
  const classValue = isAdd ? "in-cart" : "";
  return (
    <li className={classValue}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {buttonValue}
      </button>
    </li>
  );
}

export default Item;
