import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Topbar } from "../../components/topbar/Topbar";

export const Capture = () => {
  const { id } = useParams();
  const [capturedImage, setCapturedImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState({ lat: "", long: "" });
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  };

  const handleSubmit = async () => {
    if (!userName) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send. Please enter your name first!",
      });
    }

    try {
      await axios.post("http://localhost:8800/api/v1/capture-moment/", {
        movieId: id,
        userName,
        photo: capturedImage,
        location,
      });

      Swal.fire({
        title: "Success",
        text: "Your photo is successfully uploaded.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error uploading photo", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while uploading the photo.",
      });
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="bg-slate-800 text-white min-h-screen flex flex-col items-center">
      <Topbar />
      <header className="text-center mt-32 mb-5">
        <h1 className="text-3xl font-bold">Capture Your Movie Experience</h1>
        <p>Capture and share your photo taken at the movie theater!</p>
      </header>

      <div className="w-full flex justify-center">
        {!capturedImage ? (
          <div className="flex flex-col items-center">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-64 h-52 sm:w-96 sm:h-72 rounded-lg"
            />
            <button
              onClick={captureImage}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Capture Photo
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-64 h-52 sm:w-96 sm:h-72 rounded-lg"
            />
            <div className="mt-4 flex space-x-4">
              <button
                onClick={retakePhoto}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Retake Photo
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Save and Upload
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-3/4 sm:w-1/2 mt-8">
        <label className="block mb-2 text-center">
          Your Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </label>
      </div>
    </div>
  );
};
