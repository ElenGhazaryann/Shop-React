import RecordBlock from "./RecordBlock";

function Records({ records, addToBasket }) {
  return (
    <div className="container">
      {records.map((record) => (
        <RecordBlock
          key={record.id}
          record={record}
          addToBasket={addToBasket}
          id={record.id}
        />
      ))}
    </div>
  );
}
export default Records;
