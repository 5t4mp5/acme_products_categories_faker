import React from "react";
import axios from "axios";
import Product from "./Product";

const Category = ({ category }) => {
  return (
    <li className="list-group-item" key={category.id}>
      {category.name}
      <div style={{ float: "right" }}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            axios
              .post(`/api/categories/${category.id}`)
              .catch(ex => console.error(ex.message));
          }}
        >
          +
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            axios
              .delete(`/api/categories/${category.id}`)
              .catch(ex => console.error(ex.message));
          }}
        >
          -
        </button>
      </div>
      <ul className="list-group">
        {category.products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
        <br />
      </ul>
    </li>
  );
};

export default Category;
