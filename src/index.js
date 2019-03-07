import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import List from "./List";

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
    this.componentDidMount();
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
                .catch(ex => console.error(ex.message));
            }}
          >
            Create Cateogry
          </button>
          <List categories={this.state.categories} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
