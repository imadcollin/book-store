import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Providers/ProductProvider";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
