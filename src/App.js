import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";
import Book from "./Components/Book";
import Nav from "./Components/Nav";
function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={BookList}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/bookDetails" component={BookDetails}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
