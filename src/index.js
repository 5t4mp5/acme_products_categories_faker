import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }
  componentDidMount() {
    axios
      .get("/api/categories")
      .then(categories => categories.data)
      .then(categories => this.setState({ categories }))
      .catch(ex => console.error(ex.message));
  }
  render() {
    return (
      <div id="main">
        <div className="container">
          <h2>ACME PRODUCTS CATERGORIES FAKER</h2>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: { top: "10px" } }}
            onClick={() => {
              axios
                .post("/api/categories")
                .then(() => this.componentDidMount())
                .catch(ex => console.error(ex.message));
            }}
          >
            Create Cateogry
          </button>
          <ul className="list-group">
            {this.state.categories.map(category => {
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
                          .then(() => this.componentDidMount())
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
                          .then(() => this.componentDidMount())
                          .catch(ex => console.error(ex.message));
                      }}
                    >
                      -
                    </button>
                  </div>
                  <ul className="list-group">
                    {category.products.map(product => {
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
                                  .then(() => this.componentDidMount())
                                  .catch(ex => console.error(ex.message));
                              }}
                            >
                              -
                            </button>
                          </div>
                        </li>
                      );
                    })}
                    <br />
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
