import { useEffect, useState } from "react";

function RecordBlock({
  title,
  images,
  classification,
  culture,
  dated,
  id,
  addToBasket,
}) {
  let [quantity, setQuantity] = useState(0);
  const addItem = () => {
    setQuantity((val) => val + 1);
    addToBasket({ title, id, quantity: quantity + 1 });
  };
  const removeItem = () => {
    if (quantity !== 0) {
      setQuantity((val) => val - 1);
      addToBasket({ ...title, id, quantity: quantity - 1 });
    }
  };
  return (
    <div className="record">
      <h2>{title}</h2>
      <img className="record-img" src={images} />
      <p>Classification: {classification}</p>
      <p>Culture: {culture}</p>
      <p>Dated: {dated}</p>
      <div className="btns">
        <button onClick={addItem}>Add</button>
        <p>{quantity}</p>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}

export default RecordBlock;
