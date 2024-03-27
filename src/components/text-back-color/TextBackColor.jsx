/* eslint-disable react/prop-types */
import "./textbackcolor.css";
export default function TextBackColor({ children, girlIcon }) {
  return (
    <div className="text-two">
      <div className="text-two-container">
        <p className="text">{children}</p>
      </div>
      {girlIcon && (
        <div className="girl-icon">
          <img src="/girl.png" alt="Icon" />
        </div>
      )}
    </div>
  );
}
