import { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://nature-narratives-backend.onrender.com/api/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log("error fetching photos", error);
      });
  }, []);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigatePhotos = (direction) => {
    if (direction === "next") {
      setSelectedPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setSelectedPhotoIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="home">
      <h1>Nature Narratives</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={`https://nature-narratives-backend.onrender.com/api/photos/${photo}`}
            alt={`Photo`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <span className="prev" onClick={() => navigatePhotos("prev")}>
            &#10094;
          </span>
          <div className="image-container">
            <img
              src={`https://nature-narratives-backend.onrender.com/api/photos/${photos[selectedPhotoIndex]}`}
              alt="Selected Photo"
              className="modal-content"
            />
          </div>
          <span className="next" onClick={() => navigatePhotos("next")}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
