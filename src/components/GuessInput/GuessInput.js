import React, { useState } from "react";

function GuessInput({ handleForm }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("please enter 5 exact letters <3");
      return;
    }
    handleForm(guess);
    console.log(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label>
        Enter guess:{" "}
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          maxLength={5}
          minLength={5}
        />
      </label>
    </form>
  );
}

export default GuessInput;
