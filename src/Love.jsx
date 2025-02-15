import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import sayangKu from "./assets/bbyzu.jpg";

const Love = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "Someone";
  const to = searchParams.get("to") || "Someone";
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [message, setMessage] = useState("Will you be my valentine? 💖");
  const [showContent, setShowContent] = useState(true);
  const [showHappyImage, setShowHappyImage] = useState(false);

  const handleNoClick = () => {
    setYesSize((prevSize) => prevSize * 1.25);
    setNoSize((prevSize) => Math.max(prevSize * 0.75, 0.5));
  };

  const handleYesClick = () => {
    setMessage("Yay! I'm so happy you said yes! 🥰💖");
    setShowContent(false);
    setShowHappyImage(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-[#ff6b6b] text-4xl m-5 leading-relaxed font-bold">
          {message}
        </h1>

        {showContent && (
          <>
            <div className="mt-5 mb-10">
              <img
                src="https://media3.giphy.com/media/VM1fcpu2bKs1e2Kdbj/200w.gif"
                alt="Image"
              />
            </div>
            <div className="space-x-4">
              <button
                className="relative bg-[#97cdff] text-white z-2 px-4 py-2 rounded-full cursor-pointer transition-transform duration-300 ease-in"
                style={{
                  transform: `scale(${yesSize})`,
                }}
                onClick={handleYesClick}
              >
                Yes!
              </button>
              <button
                className="relative bg-[#ff6b6b] text-white z-1 px-4 py-2 rounded-full cursor-pointer transition-transform duration-300 ease-in"
                style={{
                  transform: `scale(${noSize})`,
                }}
                onClick={handleNoClick}
              >
                No &gt;:(
              </button>
            </div>
          </>
        )}

        {showHappyImage && (
          <div className="mt-5">
            <img
              src="https://media2.giphy.com/media/h20IwOYYJgCMbj4uaD/giphy.gif?cid=6c09b952nw00t0x7qvmj4220ti59g9te0k2r86xo5h0vir8b&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
              alt="Image"
              className="w-80"
            />
          </div>
        )}
      </div>

      <footer class="fixed bottom-2 left-1/2 -translate-x-1/2 text-center text-lg text-[#ff6b6b] py-4 leading-relaxed">
        From <span className="font-bold">{from}</span> to{" "}
        <span className="font-bold">{to}</span> 💕
      </footer>
    </>
  );
};

export default Love;
