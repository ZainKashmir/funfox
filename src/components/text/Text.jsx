/* eslint-disable react/prop-types */
import "./text.css"

export default function Text({ children }) {
  return (
    <div className="text-one">
      <p className="text-one-content">{children}</p>
    </div>
  );
}
