import type { ResortListing } from "../data/data";

interface CardProps {
  listing: ResortListing;
}

function Card({ listing }: CardProps) {
  return (
    <div className="card">
      <img src={listing.pic} alt={listing.location} />

      <div className="card-info">
        <p className="location">{listing.country}</p>

        <p className="resort">{listing.location}</p>

        <p className={listing.rating > 4.0 ? "rating-green" : "rating-red"}>
          ★ {listing.rating}
        </p>

        <p className="price">${listing.price}/night</p>
      </div>
    </div>
  );
}

export default Card;