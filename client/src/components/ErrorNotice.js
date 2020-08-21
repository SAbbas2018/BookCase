import React from "react";

function ErrorNotice(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

export default ErrorNotice;
