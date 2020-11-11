import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import PageNotFound from "./Components/PageNotFound";
import Book from "./Components/Book";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={BookList}></Route>
        <Route path="/book" component={Book}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
