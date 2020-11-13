import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Book extends Component {
  render() {
    const { title, img, Author, price } = this.props.book;
    console.log(img);
    return (
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
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}
