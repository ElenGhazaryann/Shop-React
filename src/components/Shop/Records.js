import RecordBlock from "./RecordBlock";

function Records({ records, addToBasket }) {
  return (
    <div className="container">
      {records.map(({ title, images, classification, culture, dated, id }) => (
        <RecordBlock
          key={id}
          title={title}
          images={images[0].baseimageurl}
          classification={classification}
          culture={culture}
          dated={dated}
          addToBasket={addToBasket}
          id={id}
        />
      ))}
    </div>
  );
}
export default Records;
