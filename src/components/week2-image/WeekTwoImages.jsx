import "./weektwoimages.css"

export default function WeekTwoImages() {
  return (
    <div className="week2-images">
    <span className="sunny-container">
      <img src="/sunny.png" alt="sunny-img" />
      <p className="sunny-text">sunny day at a beach</p>
    </span>
    <span className="cold-container">
      <img src="/cold.png" alt="sunny-img" />
      <p className="cold-text">
        A cold rainy night in a haunted house in October
      </p>
    </span>
  </div>
  )
}
