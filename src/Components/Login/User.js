import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import UserOnLogin from "./UserOnLogin";
import SignUp from "./SignupButton";
const User = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <UserOnLogin /> : <SignUp />;
};

export default User;
