import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData, history]);

  return (
    <div className="home-page">
      {userData.user && (
        <div className="welcome-header">
          <h3>
            Welcome{" "}
            {userData.user.name[0].toUpperCase() +
              userData.user.name.substring(1)}
          </h3>
        </div>
      )}
      <div className="main-homepage-container">
        <div className="library">a</div>
        <div className="wishlist">b</div>
        <div className="recommendation">c</div>
      </div>
    </div>
  );
}
