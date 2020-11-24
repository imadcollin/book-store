import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UserOnLogin = () => {
  const { user } = useAuth0();
  const { picture } = user;

  return (
    <div>
      <Link to="/Profile">
        <div className="">
          <img
            src={picture}
            alt="Profile"
            width="30%"
            className="rounded-circle "
          />
        </div>
      </Link>
    </div>
  );
};

export default UserOnLogin;
