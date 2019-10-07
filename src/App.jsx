//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

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
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ () => setScore( homeName, 7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ () => setScore( homeName, 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ () => setScore( awayName, 7) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ () => setScore( awayName, 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <button onClick={ () => reset() }>Reset</button>
      </section>
    </div>
  );
}

export default App;
