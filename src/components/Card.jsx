import { Link } from "react-router-dom";
const Card = ({ img, id, title, price }) => {
  return (
    <>
      <article key={id} className="card">
        <img src={img} alt={title} className="card-img" />
        <h3 className="card-title">{title}</h3>
        <div className="detail">
          <h4 className="card-price">{price}</h4>
          <Link to={id} className="btn">
            Details
          </Link>
        </div>
      </article>
    </>
  );
};

export default Card;
