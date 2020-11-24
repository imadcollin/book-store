import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ProductConsumer } from "../Providers/ProductProvider";
import Book from "./Book";
import Search from "./Search";
export default class BookList extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Container>
          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
            className="text-center"
          >
            <ProductConsumer>
              {(books) =>
                books.bookList.map((book) => <Book key={book.id} book={book} />)
              }
            </ProductConsumer>
          </Row>
        </Container>
      </div>
    );
  }
}
