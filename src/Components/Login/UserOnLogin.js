import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UserOnLogin = () => {
  const { user } = useAuth0();
  const { picture } = user;

  return (
    <Link to="/Profile">
      <div style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
        <img
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            float: "right",
          }}
          src={picture}
          alt="Profile"
          width="50%"
          className="rounded-circle "
        />
      </div>
    </Link>
  );
};

export default UserOnLogin;
