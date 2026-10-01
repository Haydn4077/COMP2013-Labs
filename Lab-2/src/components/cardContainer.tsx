import listings from "../data/data";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="card-container">
      {listings.map((listing) => (
        <Card key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default CardContainer;