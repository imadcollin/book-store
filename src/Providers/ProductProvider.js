import React, { Component } from "react";
import { bookList, bookDetail } from "./MockData";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      bookList: bookList,
      bookDetail: bookDetail,
      carts: [],
      totalPrice: 0,
      searchArry: [],
    };
  }
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
    } else console.log("the book is already in the cart ");
  };
  increaseQuantity = (id) => {
    const item = this.getBookById(id);
    item.quantity += 1;

    this.setState((state) => {
      return { totalPrice: state.totalPrice + item.price };
    });
  };
  decreaseQuantity = (id) => {
    const item = this.getBookById(id);
    if (item.quantity < 0) {
      throw new Error("The quantity can not by less than 0");
    }
    item.quantity -= 1;

    this.setState((state) => {
      return { totalPrice: state.totalPrice - item.price };
    });
  };
  search = (text) => {
    console.log(text);
    if (!text) {
      console.log("Please type something...!");
    } else {
      this.setState({ searchArry: [] });

      const item = this.state.bookList.filter((book) => {
        if (!text) return true;
        if (book.title.toLowerCase().includes(text)) return true;
      });
      this.setState((state) => {
        return { searchArry: [...state.searchArry, ...item] };
      });
    }
    console.log("size before clear", this.state.searchArry.length);
  };
  clearSearch = () => {
    console.log("clicked");
    this.setState({ searchArry: [] });
    console.log("size after clear", this.state.searchArry.length);
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleBook: this.handleBook,
            addToCart: this.addToCart,
            increaseQuantity: this.increaseQuantity,
            decreaseQuantity: this.decreaseQuantity,
            search: this.search,
            clearSearch: this.clearSearch,
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
