import React from "react";
//needed to make button links to routes
// import { Link } from "react-router-dom";
import AuthOptions from "./AuthOptions";
export default function Header() {
  return (
    <div className="header bg-light">
      <i className="header-logo fas fa-book fa-2x" alt="book-Logo"></i>
      <h2 className="header-title">BookCase</h2>
      <AuthOptions />
    </div>
  );
}
