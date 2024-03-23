import React from "react";

function TrackOfGuess({ objectOfGuesses }) {
  return (
    <div className="guess-results">
      {objectOfGuesses.map((object, index) => (
        <p key={index} className="guess">
          {object}
        </p>
      ))}
    </div>
  );
}

export default TrackOfGuess;
