import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
// import TrackOfGuess from "../TrackOfGuess/TrackOfGuess";
import GuessSlots from "../GuessSlots/GuessSlots";
import Winner from "../Winner/Winner";
import Loser from "../Loser/Loser";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [objectOfGuesses, setObjectOfGuesses] = useState([]);
  let attempts = objectOfGuesses.length;

  function handleForm(label) {
    const nextNewObjects = [...objectOfGuesses, label];
    setObjectOfGuesses(nextNewObjects);
    if (label.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextNewObjects.length >= 6) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      Put a game here!
      <GuessSlots objectOfGuesses={objectOfGuesses} answer={answer} />
      <GuessInput handleForm={handleForm} />
      {gameStatus === "won" ? <Winner attempts={attempts} /> : null}
      {gameStatus === "lost" ? <Loser answer={answer} /> : null}
    </>
  );
}

export default Game;
