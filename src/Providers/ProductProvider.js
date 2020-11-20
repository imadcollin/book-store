import React, { Component } from "react";
import { bookList, bookDetail } from "./MockData";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    bookList: bookList,
    bookDetail: bookDetail,
    carts: [],
    totalPrice: 0,
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

    const isExist = this.state.carts.find((item) => item.id === id);
    if (isExist === undefined || isExist === "undefined") {
      this.setState({
        carts: [...this.state.carts, item],
        totalPrice: this.state.totalPrice + item.price,
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
