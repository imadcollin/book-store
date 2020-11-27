import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
const Loader = (props) => {
  return (
    <div>
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loader;
