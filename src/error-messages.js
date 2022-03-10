import React from "react";
import "./index.css";

export function ErrorMessage() {
  return (
    <div className="error-message">
      <h5>Error occured...</h5>
      <p>Please, refresh the window and/or wait for some time!</p>
    </div>
  );
}

export function NoUserMessage() {
  return (
    <div className="no-user-message">
      <p>No such user!</p>
    </div>
  );
}
