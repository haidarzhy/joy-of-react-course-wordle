import React, { useContext } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { AnswerContext } from "../Game";

function Guess({ item }) {
  const answer = useContext(AnswerContext);
  const status = item ? checkGuess(item, answer) : [];
  return (
    <p className="guess">
      {range(0, 5).map((key) => (
        <span
          key={key}
          className={`cell ${status[key] ? status[key].status : ""}`}
        >
          {item ? item[key] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
