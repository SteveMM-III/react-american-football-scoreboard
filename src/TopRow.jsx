import React from "react";
import "./App.css";

const TopRow = ( props ) => {
  const { home, away, homeName, awayName } = props;

  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{homeName}</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{home}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">{awayName}</h2>
        <div className="away__score">{away}</div>
      </div>
    </div>
  );
};

export default TopRow;
