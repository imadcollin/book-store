import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
import Table from "react-bootstrap/Table";
import "./cart.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PayPal from "../Providers/PayPalCheckout";
import DeliveryAddress from "./Delievery/DeliveryAddress";
export default class Cart extends Component {
  constructor() {
    super();

    // this.state = {
    //   Quantity: 1,
    //   flag: true,
    // };
  }
  render() {
    // this.increment = () => {
    //   this.setState((state) => {
    //     return {
    //       Quantity: (state.Quantity += 1),
    //     };
    //   });
    //   this.checkFlag();
    // };

    // this.checkFlag = () => {
    //   this.setState((flagState) => {
    //     if (this.state.Quantity <= 0) {
    //       return { flag: (flagState.flag = true) };
    //     } else return { flag: (flagState.flag = false) };
    //   });
    // };
    // this.decrement = () => {
    //   this.setState((state) => {
    //     return {
    //       Quantity: (state.Quantity -= 1),
    //     };
    //   });
    //   this.checkFlag();
    // };

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
              <th>Author</th>
              <th>Price </th>
              <th>Quantity </th>
            </tr>
          </thead>

          <tbody>
            <ProductConsumer>
              {(items) =>
                items.carts.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.author} </td>

                    <td>{item.price}</td>
                    <td>
                      <Button onClick={() => items.increaseQuantity(item.id)}>
                        +
                      </Button>{" "}
                      <Button variant="light"> {item.quantity}</Button>
                      <Button
                        variant="secondary"
                        disabled={item.quantity < 1 ? true : false}
                        onClick={() => items.decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                    </td>
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
        <div className="DeliveryAddress">
          <DeliveryAddress></DeliveryAddress>
        </div>
        <ProductConsumer>
          {(value) => {
            return (
              <div>
                {" "}
                <h1> Total Price : {value.totalPrice}</h1>
                <PayPal total={value.totalPrice}></PayPal>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
