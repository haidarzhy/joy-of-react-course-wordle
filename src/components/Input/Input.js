import React, { useState } from "react";

function Input({ addGuess, active }) {
  const [guess, setGuess] = useState("");

  function handleChange(event) {
    let newGuess = event.target.value;
    setGuess(newGuess.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={handleChange}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title={"5 letter word"}
        disabled={!active}
      />
    </form>
  );
}

export default Input;
