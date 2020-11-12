import React, { Component } from "react";
import { bookList, bookDetail } from "./MockData";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    bookList: bookList,
    bookDetail: bookDetail,
  };
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
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
