import { useMediaQuery } from "react-responsive";
import Text from "../text/Text";
import "./textover.css";

export default function TextOver() {
  const isMobile = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  return (
    <>
      {isMobile === false && (
        <div className="text-place">
          <div className="text-place-text">
            <Text>
              &nbsp; For today’s lesson, we will try to understand and practice
              writing the setting for our stories.
            </Text>
            <br />
            <br />
            <Text>
              &nbsp; The setting is an important element of every fiction story.
            </Text>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="text-place">
          <img className="text-place-img" src="/textplace.png" alt="img" />
          <div className="text-place-text">
            <Text>
              For today’s lesson, we will try to understand and practice writing
              the setting for our stories.
            </Text>
            <Text>
              The setting is an important element of every fiction story.
            </Text>
          </div>
        </div>
      )}
    </>
  );
}
