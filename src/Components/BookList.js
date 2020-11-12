import React, { Component } from "react";
import { ProductConsumer } from "../Providers/ProductProvider";
export default class BookList extends Component {
  render() {
    return (
      <div>
        <h2>Book list </h2>
        <ProductConsumer>
          {
            ((value) =>
              value.bookList.map((e) => <h1 key={e.title}>{e.title}</h1>))
          }
       
        </ProductConsumer>
      </div>
    );
  }
}
