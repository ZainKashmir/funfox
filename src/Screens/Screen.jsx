import { useState } from "react";
import BackgroundIcon from "../components/backgound-icon/BackgroundIcon";
import WeekOne from "../components/week-1/WeekOne";
import WeekTwo from "../components/week-2/WeekTwo";
import "./screen.css";

export default function Screen() {
  const [currentWeek, setCurrentWeek] = useState(1);

  const goToNextWeek = () => {
    if (currentWeek === 2) return;
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

  const goToPreviousWeek = () => {
    if (currentWeek > 1) {
      if (currentWeek === 1) return;
      setCurrentWeek((prevWeek) => prevWeek - 1);
    }
  };
  return (
    <div className="background-container">
      <div className="background-image">
        {currentWeek === 1 && (
          <div className="week-one-component">
            <WeekOne />
          </div>
        )}

        {currentWeek === 2 && (
          <div className="week-one-component">
            <h2><WeekTwo/></h2>
          </div>
        )}

        <BackgroundIcon />
        <div className="footer-number" >
          <button className="back-click"onClick={goToPreviousWeek}>back</button>
          <span className="week-number">{currentWeek}</span>
          <button className="next-click"  onClick={goToNextWeek}>next</button>
        </div>
      </div>
    </div>
  );
}
