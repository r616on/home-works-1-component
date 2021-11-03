import React from "react";
import PropTypes from "prop-types";
import "./desktop.css";

function ShopItemFunc(props) {
  const { brand, title, description, descriptionFull, price, currency } =
    props.item;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency + price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
ShopItemFunc.defaultProps = {
  item: {
    brand: "",
    title: "",
    description: "",
    descriptionFull: "",
    currency: "£",
    price: 0,
  },
};

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ShopItemFunc;
