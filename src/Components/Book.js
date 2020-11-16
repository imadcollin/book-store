import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Providers/ProductProvider";

export default class Book extends Component {
  render() {
    const { id, title, img, Author, price } = this.props.book;
    return (
      <div>
        <ProductConsumer>
          {(value) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> Written by: {Author}</Card.Text>
                <Card.Text>Price: {price} kr</Card.Text>
                <Link to="/bookDetails">
                  <Button
                    variant="primary"
                    onClick={() => value.handleBook(id)}
                  >
                    Details
                  </Button>
                </Link>
                <Button onClick={()=>value.addToCart(id)}>Add to Cart</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    Author: PropTypes.string,
  }).isRequired,
};
