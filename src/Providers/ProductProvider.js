import React, { Component } from "react";
import { bookList, bookDetail } from "./MockData";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    bookList: bookList,
    bookDetail: bookDetail,
    carts: [],
  };
  getBookById = (id) => {
    const book = bookDetail.find((book) => book.id === id);
    return book;
  };
  handleBook = (id) => {
    const book = this.getBookById(id);
    this.setState(() => {
      return { bookDetail: book };
    });
  };
  addToCart = (id) => {
    const item = this.getBookById(id);

    const test = this.state.carts.find((item) => item.id === id);
    if (test === undefined || test === "undefined") {
      this.setState({
        carts: [...this.state.carts, item],
      });
    } else console.log("Already in the Cart");
  };
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleBook: this.handleBook,
            addToCart: this.addToCart,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
