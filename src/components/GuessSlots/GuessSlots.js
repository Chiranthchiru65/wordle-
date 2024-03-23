import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessBox from "../GuessBox/GuessBox";

function GuessSlots({ objectOfGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessBox key={num} word={objectOfGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessSlots;
