import React from "react";
// import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessBox({ word, answer }) {
  const result = checkGuess(word, answer);
  console.log(result);

  return (
    <>
      <p className="guess">
        {range(5).map((number) => (
          <Cell
            key={number}
            letter={result ? result[number].letter : undefined}
            status={result ? result[number].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

function Cell({ letter, status }) {
  const actualClass = status ? `cell ${status}` : `cell`;
  return <span className={`cell ${actualClass}`}>{letter}</span>;
}

export default GuessBox;
