import React from "react";
import axios from "axios";

const Product = ({ product }) => {
  return (
    <li className="list-group-item" key={product.id}>
      {product.name}
      <div style={{ float: "right" }}>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            axios
              .delete(`/api/products/${product.id}`)
              .catch(ex => console.error(ex.message));
          }}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Product;
