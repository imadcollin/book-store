import React, { Component } from "react";
import logo from "../logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AppNav.css";
import Button from "react-bootstrap/Button";
import { ProductConsumer } from "../Providers/ProductProvider";
import User from "./Login/User";
import AuthButton from "./Login/AuthButton";
export default class AppNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Book Store
          </Navbar.Brand>
        </Link>{" "}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <ProductConsumer>
            {(items) => (
              <Link to="/Cart">
                <Button disabled={items.carts.length === 0 ? true : false}>
                  {" "}
                  My Cart ( {items.carts.length} ){" "}
                </Button>{" "}
              </Link>
            )}
          </ProductConsumer>
        </Nav>
        <Nav>
          <AuthButton />
          <User />
        </Nav>
      </Navbar>
    );
  }
}
