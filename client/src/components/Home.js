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
    <div className="page">
      <h3>Welcome {userData.user ? userData.user.name : null}</h3>
    </div>
  );
}
