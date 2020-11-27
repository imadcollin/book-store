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
import { useAuth0 } from "@auth0/auth0-react";
// import AuthButton from "./Components/Login/AuthButton";
import Profile from "./Providers/Profile";
import ProtectedRoute from "./Providers/ProtectRoute";
import Loader from "./Components/Loader";
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="spinner-wrapper">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Nav></Nav>
      {/* <AuthButton /> */}
      <Switch>
        <Route exact path="/" component={BookList}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/bookDetails" component={BookDetails}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <ProtectedRoute path="/Profile" component={Profile}></ProtectedRoute>
        <Route component={PageNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
