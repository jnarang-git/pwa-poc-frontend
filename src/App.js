import { useEffect, useRef, useState } from "react";
import swDev from "./swDev";
import Table from "./components/Table";
// import webpush from "web-push";
import styles from "./styles/Table.scss";
import { Switch } from "@mui/material";

function App() {
  const [openCamera, toggleCamera] = useState(false);
  const [rearCamera, toggleCameraView] = useState(false);
  const videoRef = useRef();
  // const photoRef = useRef();
  let mediaStream;

  const getVideo = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 600 },
          height: { ideal: 400 },
          facingMode: rearCamera ? "environment" : "user",
        },
      });
    let video = videoRef.current;
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  };

  function stopCamera() {
    videoRef.srcObject = null;
    // Function to reset the video stream
    if (mediaStream) {
      console.log("mediaStream.getTracks()", mediaStream.getTracks());
      mediaStream.getVideoTracks().forEach((track) => {
        console.log("terack stoo");
        track.stop();
      });
    }
  }

  const handleCameraToggle = () => {
    toggleCamera((prev) => {
      if (prev) {
        stopCamera();
      }
      return !prev;
    });
  };
  const handleCameraViewToggle = () => {
    toggleCameraView((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    if (openCamera) getVideo();
    else stopCamera();
  }, [openCamera, videoRef, rearCamera]);
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div
      className="App"
      style={{ width: "100%", height: "100%", background: "#020278" }}
    >
      <div className="result">
        {/* <canvas ref={photoRef}></canvas> */}
        <Table />
      </div>
      <div className="camera">
        <p style={{ color: "white" }}>Camera On/OFF</p>
        <Switch onChange={handleCameraToggle} {...label} color="secondary" />
        <p style={{ color: "white" }}>Rear/Front</p>
        <Switch onChange={handleCameraViewToggle} {...label} color="primary" />
        {openCamera ? <video id="videoElement" ref={videoRef}></video> : null}
      </div>
    </div>
  );
}
export default App;
//Registering the service worked
swDev();
