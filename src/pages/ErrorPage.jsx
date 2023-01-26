import React from "react";

function ErrorPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Page Not Found
        <Link to="/">Go to Home </Link>
      </h1>
    </div>
  );
}

export default ErrorPage;
