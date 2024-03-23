import React from "react";

function Loser({ answer }) {
  return (
    <div className="sad banner">
      <p>
        sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Loser;
