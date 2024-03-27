import './guess.css'

export default function Guess() {
  return (
    <div className="guess-row">
        <span className="any-guess">Any guesses ? &nbsp;</span>
      <div className="outer-border">
        <div className="inner-border"></div>
      </div>
        <span className="hint-text"> &nbsp; Hint :</span>
        <img className='guess-img' style={{marginRight:10}} src='/clock.png' alt='clock-img'/>
        <img className='guess-img' src="/home.png" alt="home-img" />
    </div>
  );
}
