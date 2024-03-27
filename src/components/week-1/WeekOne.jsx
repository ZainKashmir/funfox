import CloudText from "../cloud-text/CloudText";
import TextBackColor from "../text-back-color/TextBackColor";
import TextOver from "../text-over-img/TextOver";
import Text from "../text/Text";
import "./week1.css";

function WeekOne() {
  const girlIcon=true;
  return (
    <>
    <img className="week1-icon" src="/week1.png"/>
    <div className="week-one">
      <div className="header">
        <span className="header-content">Elements of Story Writing</span>
      </div>
      <Text>
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </Text>
      <TextBackColor girlIcon={girlIcon}>
        There are elements which make the foundation for story writing. An
        element is an essential part of something and every fiction story has
        the same key elements:
      </TextBackColor>
      <CloudText />
      <Text>
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </Text>
      <TextOver/>
    </div>
    </>
  );
}

export default WeekOne;
