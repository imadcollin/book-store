import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class BookDetails extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <ProductConsumer>
              {({ bookDetail }) => (
                <Card
                  className="text-center"
                  style={{ width: "30rem" }}
                  key={bookDetail.id}
                >
                  <Card.Img
                    variant="top"
                    src={bookDetail.img}
                    style={{ width: "100%", height: "400px" }}
                  />
                  <Card.Body>
                    <Card.Title>{bookDetail.title}</Card.Title>
                    <Card.Text> Written by: {bookDetail.Author}</Card.Text>
                    <Card.Text>Price: {bookDetail.price} kr</Card.Text>
                    <Card.Text> {bookDetail.info} </Card.Text>
                    <Link to="/">
                      <Button variant="primary">Go Back</Button>
                    </Link>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              )}
            </ProductConsumer>
          </Row>
        </Container>
      </div>
    );
  }
}
