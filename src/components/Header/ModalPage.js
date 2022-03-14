import { useState } from "react";

function ModalPage({ openModal, cartState, setCartState }) {
  const separateModal = (e) => e.stopPropagation();
  const closeModal = () => openModal();
  const deleteItem = (id) =>
    setCartState((prev) => prev.filter((item) => item.id !== id));

  return (
    <div onClick={() => openModal()} className="modal-bck">
      <div onClick={separateModal} className="modal">
        {cartState.map(({ title, quantity, id }) => (
          <div key={id}>
            <p className="basket-item">
              {`${title} - ${quantity}`}
              <button onClick={() => deleteItem(id)} className="btn-delete">
                x
              </button>
            </p>
          </div>
        ))}

        <div>
          <button className="btn-close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
