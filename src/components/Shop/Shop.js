import Header from "../Header/Header.js";
import "./Shop.css";
import { useState, useEffect } from "react";
import fetchData from "../../helpers/fetchData.js";
import Records from "./Records.js";
import ModalPage from "../Header/ModalPage.js";

function Shop() {
  const [cartState, setCartState] = useState([]);
  const [records, setRecords] = useState([]);

  const [isOpened, setIsOpened] = useState(false);
  const openModal = () => setIsOpened(!isOpened);

  const addToBasket = (obj) => {
    const added = cartState.find((x) => x.id === obj.id);
    if (added) {
      cartState.map((el) =>
        el.id === obj.id ? (el.quantity = obj.quantity) : el
      );
    } else {
      setCartState((prev) => [
        ...prev,
        { title: obj.title, quantity: obj.quantity, id: obj.id },
      ]);
    }
  };

  useEffect(() => {
    fetchData().then((res) => {
      setRecords(res.records);
    });
  }, []);

  return (
    <>
      <Header openModal={openModal} />
      <div className="all">
        <Records records={records} addToBasket={addToBasket} />
        {isOpened && (
          <ModalPage
            openModal={openModal}
            cartState={cartState}
            setCartState={setCartState}
          />
        )}
      </div>
    </>
  );
}
export default Shop;
