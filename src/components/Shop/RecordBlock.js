import { useEffect, useState } from "react";


function RecordBlock({ record, addToBasket, id }) {
  let [quantity, setQuantity] = useState(0);

  const addItem = () => {
    setQuantity((val) => val + 1);
    quantity++;
    addToBasket({ ...record, quantity });
  };

  const removeItem = () => {
    if (quantity !== 0) {
      setQuantity((val) => val - 1);
      quantity--;
      addToBasket({ ...record, quantity });
    }
  };

  return (
    <div className="record">
      <h2>{record.title}</h2>
      <img className="record-img" src={record.images[0].baseimageurl} />
      <p>Classification: {record.classification}</p>
      <p>Culture: {record.culture}</p>
      <p>Dated: {record.dated}</p>
      <div className="btns">
        <button onClick={addItem}>Add</button>
        <p>{quantity}</p>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
} 

export default RecordBlock;
