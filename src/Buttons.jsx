import React from "react";
import "./App.css";

const Buttons = (props) => {
    const { homeName, awayName, setScore, reset } = props;

    return (
        <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button onClick={() => setScore(homeName, 7)} className="homeButtons__touchdown">Home Touchdown</button>
                <button onClick={() => setScore(homeName, 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={() => setScore(awayName, 7)} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={() => setScore(awayName, 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
            <button onClick={() => reset()}>Reset</button>
        </section>
    );
};

export default Buttons;