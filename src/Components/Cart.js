import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
import Table from "react-bootstrap/Table";
import "./cart.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Cart extends Component {
  render() {
    this.state = {
      count: 0,
    };
    this.goBack = () => {
      this.props.history.push("/");
    };
    return (
      <div className="flex-container">
        <h2>My Card</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th> Title</th>
              <th>Price </th>
              <th>Author</th>
            </tr>
          </thead>

          <tbody>
            <ProductConsumer>
              {(items) =>
                items.carts.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.Author} </td>
                  </tr>
                ))
              }
            </ProductConsumer>
          </tbody>
        </Table>
        <Button
          renderAs={Link}
          type="button"
          variant="secondary"
          block
          size="lg"
          onClick={this.goBack}
        >
          Back
        </Button>

        <Button size="lg" block>
          Checkout
        </Button>
      </div>
    );
  }
}
