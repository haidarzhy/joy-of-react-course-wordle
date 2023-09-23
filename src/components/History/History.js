import React, { useState } from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function History({ history }) {
  return (
    <div className="guess-results">
      {history.map((item) => (
        <Guess key={item.id} item={item.text} />
      ))}
      {range(0, NUM_OF_GUESSES_ALLOWED - history.length).map((key) => (
        <Guess key={key} />
      ))}
    </div>
  );
}

export default History;
