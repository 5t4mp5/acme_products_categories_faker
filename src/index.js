import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {categories: []};
  }
  componentDidMount() {
    axios
      .get("/api/categories")
      .then(categories => categories.data)
      .then(categories => this.setState({categories}))
      .catch(ex => console.error(ex.message));
  }
  render() {
    return (
      <div id="main">
        <div className="container">
          <h2>ACME PRODUCTS CATERGORIES FAKER</h2>
          <ul className="list-group">
            {
              this.state.categories.map(category => {
                return (
                  <div key="categories">
                  <li className="list-group-item" key="category.id">{category.name}</li>
                  <br clear="all" />
                  <ul className="list-group">
                    {
                      category.products.map(product => {
                        return(
                          <li className="list-group-item" key={product.id}>{product.name}</li>
                        );
                      })
                    }
                    <br />
                  </ul>
                  </div>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
