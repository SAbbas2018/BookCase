import React from "react";
//needed to make button links to routes
// import { Link } from "react-router-dom";
import AuthOptions from "./AuthOptions";
export default function Header() {
  return (
    <div className="header bg-light">
      <AuthOptions />
    </div>
  );
}
