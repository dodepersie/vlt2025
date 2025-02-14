import React, { useState } from "react";
import "./App.css";
import sayangKu from "./assets/bbyzu.jpg";

function App() {
  const [yesSize, setYesSize] = useState(16);
  const [noSize, setNoSize] = useState(16);
  const [message, setMessage] = useState("Will you be my valentine? 💖");
  const [showContent, setShowContent] = useState(true);
  const [showHappyImage, setShowHappyImage] = useState(false);

  const handleNoClick = () => {
    setYesSize((prevSize) => prevSize + 10);
    setNoSize((prevSize) => Math.max(prevSize - 5, 10));
  };

  const handleYesClick = () => {
    setMessage("Yay! I'm so happy you said yes, istri ku sayang 🥰💖");
    setShowContent(false);
    setShowHappyImage(true);
  };

  return (
    <div className="valentine-container">
      <h1>{message}</h1>

      {showContent && (
        <>
          <div>
            <img src={sayangKu} alt="BbyZu <3" className="main-img" />
          </div>
          <div className="btn-container">
            <button
              className="yes-button"
              style={{ fontSize: `${yesSize}px`, transition: "all 0.3s ease" }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className="no-button"
              style={{ fontSize: `${noSize}px`, transition: "all 0.3s ease" }}
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
        </>
      )}

      {showHappyImage && (
        <div className="happy-image">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnNubnF4YjVodjRodWhpaW9jNGF2dnA3ZThvMXlvdWV0ZXVoMDM1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif"
            alt=":)"
          />
        </div>
      )}
    </div>
  );
}

export default App;
