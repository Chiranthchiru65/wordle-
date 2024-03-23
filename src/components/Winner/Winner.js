import React from "react";

function Winner({ attempts }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> got it in
        <strong>
          {" "}
          {attempts} {`${attempts === 1 ? "guess" : "guesses"}`}
        </strong>
        .
      </p>
    </div>
  );
}

export default Winner;
