import React from "react";
//needed to make button links to routes
import { Link } from "react-router-dom";
import AuthOptions from "./AuthOptions";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">Home</h1>
      </Link>
      <AuthOptions />
    </div>
  );
}
