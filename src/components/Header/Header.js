function Header({ openModal }) {
  return (
    <>
      <header>
        <button onClick={openModal} className="btn-basket">
          Basket
        </button>
      </header>
    </>
  );
}

export default Header;
