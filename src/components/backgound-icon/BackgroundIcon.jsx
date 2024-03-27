import "./backgroundicon.css"

export default function BackgroundIcon() {
  return (
    <>
      <div className="left-icons">
        <img className="icon" src="/pencil.png" alt="Icon 1" />
        <img className="icon" src="/bag.png" alt="Icon 2" />
        <img className="icon" src="/openbook.png" alt="Icon 3" />
      </div>
      <div className="right-icons">
        <img className="icon" src="/ruler.png" alt="Icon 4" />
        <img className="icon" src="/book.png" alt="Icon 5" />
        <img className="icon" src="/hat.png" alt="Icon 6" />
      </div>
      <div className="footer">
        <img className="footer-icon" src="/profile.png" alt="Icon 4" />
        <img className="footer-icon" style={{width:180}} src="/number.png" alt="Icon 5" />
        <img className="footer-icon" src="/info.png" alt="Icon 6" />
      </div>
    </>
  );
}
