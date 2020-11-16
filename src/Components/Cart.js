import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
import ListGroup from "react-bootstrap/ListGroup";
export default class Cart extends Component {
  render() {
    return (
      <ListGroup as="ul" action variant="secondary">
        <ProductConsumer>
          {(items) =>
            items.carts.map((item) => (
              <ListGroup.Item as="li" key={item.id}>
                {item.title} {item.price}
              </ListGroup.Item>
            ))
          }
        </ProductConsumer>
      </ListGroup>
    );
  }
}
