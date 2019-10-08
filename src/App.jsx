//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  const homeName = 'Lions';
  const awayName = 'Tigers';

  const setScore = ( team, score) => { 
    team === homeName ? setHome( home + score ) : setAway( away + score );
  };

  const reset = () => {
    setAway(0);
    setHome(0);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow home={home} away={away} homeName={homeName} awayName={awayName} />
        <BottomRow />
      </section>
      <Buttons homeName={homeName} awayName={awayName} setScore={setScore} reset={reset} />
    </div>
  );
}

export default App;
