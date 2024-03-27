/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './cloudtext.css'; // Import your CSS file where you define styles

function CloudComponent({ imageSrc, text , textStyle }) {
  return (
    <div className="cloud-container">
      <img src={imageSrc} alt="Cloud" className="cloud-image" />
      <p className={`cloud-text`} style={textStyle}>{text}</p>
    </div>
  );
}

function CloudText() {
  return (
    <div className="cloud-group">
      <CloudComponent imageSrc="cloud.png" textStyle={{marginLeft:10 }} text= "SETTINGS" />
      <CloudComponent imageSrc="chrcloud.png" textStyle={{marginLeft:12 }} text="CHARACTERS" />
      <CloudComponent imageSrc="cloud.png"  textStyle={{marginLeft:10 }} text="PLOT" />
      <CloudComponent imageSrc="probcloud.png" textStyle={{marginLeft:10 }} text="PROBLEM OR CONFLICT" />
      <CloudComponent imageSrc="chrcloud.png" textStyle={{marginLeft:10 }} text="RESOLUTION" />
    </div>
  );
}

export default CloudText;
