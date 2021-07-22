import React from "react";

function Error({errors = []}) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="flex-container">
  <p className="errorMsg">{errors}</p>
  </div>
  );
  }

export default Error;
