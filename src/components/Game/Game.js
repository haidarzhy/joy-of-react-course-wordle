import React, { createContext, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import History from "../History";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
export const AnswerContext = createContext(answer);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function WinBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses} guesses</strong>.
      </p>
    </div>
  );
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Game() {
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("processing");
  function addGuess(guess) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const nextHistory = [...history, { id, text: guess }];
    setHistory(nextHistory);
    if (guess === answer) {
      setResult("win");
    }
    if (nextHistory.length === NUM_OF_GUESSES_ALLOWED) {
      setResult("lose");
    }
  }

  return (
    <>
      <History history={history} />
      <Input addGuess={addGuess} active={result === "processing"} />
      {result === "lose" && <LoseBanner answer={answer} />}
      {result === "win" && <WinBanner guesses={history.length} />}
    </>
  );
}

export default Game;
