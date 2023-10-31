import React from "react";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const {
    title,
    img,
    color,
    display,
    resolution,
    camera,
    chipset,
    ram,
    battery,
    price,
    announced,
  } = data.find((d) => d.id == id);
  return (
    <div className="detail-product">
      <div className="info-container">
        <img className="info-img" src={img} alt={title} />
        <ul className="product-info">
          <li>
            Model : <span>{title}</span>
          </li>
          <li>
            Color : <span>{color}</span>
          </li>
          <li>
            Announced Date : <span>{announced}</span>
          </li>
          <li>
            Display : <span>{display}</span>
          </li>
          <li>
            Resolution : <span>{resolution}</span>
          </li>
          <li>
            Camera : <span>{camera}</span>
          </li>
          <li>
            Chip : <span>{chipset}</span>
          </li>
          <li>
            Ram : <span>{ram}</span>
          </li>
          <li>
            Battery : <span>{battery}</span>
          </li>
          <li>
            Price : <span>{price}</span>
          </li>
        </ul>
      </div>
      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
};

export default ProductDetail;
