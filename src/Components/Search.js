import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
import Book from "./Book";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: " ",
    };
  }
  render() {
    this.handleChanges = (e) => {
      const text = e.target.value;
      this.setState((state) => {
        return { input: (state.input = text.toLowerCase()) };
      });

      console.log("-----");
      console.log(this.state.input);
    };

    this.clearInput = () => {
      document.getElementById("searchInput").value = "";
    };

    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Book Store </h1>
            <p>
              Search the world's most comprehensive index of full-text books
            </p>
            <Form>
              <Row>
                <InputGroup>
                  <FormControl
                    placeholder="Search for a book... "
                    size="lg"
                    aria-describedby="basic-addon2"
                    id="searchInput"
                    onChange={(e) => this.handleChanges(e)}
                  />
                  <ProductConsumer>
                    {(books) => (
                      <div>
                        <InputGroup.Append>
                          <Button
                            variant="outline-secondary"
                            size="lg"
                            onClick={() => {
                              books.clearSearch();
                              this.clearInput();
                            }}
                          >
                            X
                          </Button>
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={() => books.search(this.state.input)}
                          >
                            Search
                          </Button>
                        </InputGroup.Append>
                      </div>
                    )}
                  </ProductConsumer>
                </InputGroup>

                <Col>
                  <ProductConsumer>
                    {(books) => (
                      <div
                        style={{
                          display: "flex",
                          flexFlow: "wrap",
                          justifyContent: "space-between",
                        }}
                      >
                        {books.searchArry.map((book) => (
                          <Book key={book.id} book={book} />
                        ))}
                      </div>
                    )}
                  </ProductConsumer>
                </Col>
              </Row>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
