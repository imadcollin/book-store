import React, { Component } from "react";
import { bookList, bookDetail } from "./MockData";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    bookList: bookList,
    bookDetail: bookDetail,
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
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleBook: this.handleBook,
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
