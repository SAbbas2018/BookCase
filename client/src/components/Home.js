import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import LibraryClass from "./main/LibraryClass.js";
import Wishlist from "./main/Wishlist.js";
import Recommendation from "./main/Recommendation.js";
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
      {userData.user && (
        <div className="main-homepage-container">
          <div className="library">
            <h3 className="component-title">Library</h3>
            <LibraryClass />
          </div>
          <div className="wishlist">
            <h3 className="component-title">Wishlist</h3>
            <Wishlist />
          </div>
          <div className="recommendation">
            <h3 className="component-title">Recommendations</h3>
            <Recommendation />
          </div>
        </div>
      )}
    </div>
  );
}
