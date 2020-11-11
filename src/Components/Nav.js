import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AppNav.css";
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
      </Navbar>
    );
  }
}
