import Text from "../text/Text";
import TextBackColor from "../text-back-color/TextBackColor";
import Guess from "../guess/Guess";
import WeekTwoImages from "../week2-image/WeekTwoImages";
import "./week2.css";

export default function WeekTwo() {
  const girlIcon = false;
  return (
    <div className="week-two">
      <Text>
        Can you figure out the definition of setting from the following
        examples?
      </Text>
      <div>
        <p className="take-a-min">(take a minute to think about this)</p>
      </div>
      <WeekTwoImages />
      <Guess />
      <TextBackColor girlIcon={girlIcon}>
        Setting is the time
        <img
          src="/clock.png"
          alt="clock"
          style={{ width: 30, height: 30, marginBottom: -5 }}
        />{" "}
        and place{" "}
        <img
          src="/home.png"
          alt="home"
          style={{ width: 30, height: 30, marginBottom: -5 }}
        />{" "}
        of a story. It often answers the questions: when? and where?
      </TextBackColor>
      <Text>
        <p style={{ fontWeight: 200 }}>
          {" "}
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane or in a variety of other places.
        </p>
      </Text>
    </div>
  );
}
