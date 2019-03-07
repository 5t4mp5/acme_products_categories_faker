import React from "react";
import Category from "./Category";
const List = ({ categories }) => {
  return (
    <ul className="list-group">
      {categories.map(category => {
        return (
          <Category key={category.id} category={category} />
        );
      })}
    </ul>
  );
};

export default List;
