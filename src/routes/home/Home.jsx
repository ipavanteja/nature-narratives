import { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css";

const imageURLs = [
  "https://i.ibb.co/LCWXP3q/20240405-073003-copy.jpg",
  "https://i.ibb.co/sP4JxtY/20240405-073822-copy.jpg",
  "https://i.ibb.co/dGFBJ5y/20240406-072806-copy3-copy.jpg",
  "https://i.ibb.co/J739kxW/DSC-0005.jpg",
  "https://i.ibb.co/ZBX6cWn/DSC-0008.jpg",
  "https://i.ibb.co/Jcf49VV/DSC-0009.jpg",
  "https://i.ibb.co/VDggNCQ/DSC-0011.jpg",
  "https://i.ibb.co/FDF7h09/DSC-0016.jpg",
  "https://i.ibb.co/kGqRr0h/DSC-0020-2.jpg",
  "https://i.ibb.co/c3LP3fY/DSC-0025.jpg",
  "https://i.ibb.co/6N3pdvq/DSC-0037.jpg",
  "https://i.ibb.co/3TxgNHZ/DSC-0042.jpg",
  "https://i.ibb.co/BcQ9j3D/DSC-0043.jpg",
  "https://i.ibb.co/tCnWxhC/DSC-0044.jpg",
  "https://i.ibb.co/PTw8qsD/DSC-0045.jpg",
  "https://i.ibb.co/tq3LdYQ/DSC-0046.jpg",
  "https://i.ibb.co/XkKBpw6/DSC-0049.jpg",
  "https://i.ibb.co/8gy62TV/DSC-0053-copy.jpg",
  "https://i.ibb.co/1MgrpR4/DSC-00200.jpg",
  "https://i.ibb.co/zsgxFHn/IMG-20210405-201803-678-copy.jpg",
  "https://i.ibb.co/K0JMzQR/IMG-20210415-1733567-copy.jpg",
  "https://i.ibb.co/Ct30pq7/IMG-20210528-194113-6967-copy.jpg",
  "https://i.ibb.co/kDRFms2/IMG-20210606-185705-copy.jpg",
  "https://i.ibb.co/M9znmFZ/IMG-20210613-111114-988-copy.jpg",
  "https://i.ibb.co/RzD9xQ8/IMG-20210703-183558-copy.jpg",
  "https://i.ibb.co/MMDBfGk/IMG-20210703-205331-354-copy.jpg",
  "https://i.ibb.co/7X97325/IMG-20220130-073352-copy.jpg",
  "https://i.ibb.co/8sMkT4J/IMG-20220130-08231789-copy.jpg",
  "https://i.ibb.co/pnGGBMG/IMG-20230503-053233.jpg",
  "https://i.ibb.co/bH8WJLz/IMG-20230504-052831.jpg",
  "https://i.ibb.co/0M8bwt7/IMG-20230504-052845.jpg",
  "https://i.ibb.co/Sn5HzH3/IMG-20230504-053140.jpg",
  "https://i.ibb.co/z6TDx0n/IMG-20230504-053156.jpg",
  "https://i.ibb.co/mychq6H/IMG-20230504-053213.jpg",
  "https://i.ibb.co/p2qd0y6/IMG20231231145639-copy.jpg",
  "https://i.ibb.co/gw3CP9T/IMG20231231145657-copy.jpg",
  "https://i.ibb.co/X4M96L7/IMG20231231145806-copy.jpg",
  "https://i.ibb.co/rMw4ck1/spider-web.jpg",
];

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://nature-narratives-backend.onrender.com/api/photos")
    //   .then((response) => {
    //     setPhotos(response.data);
    //   })
    //   .catch((error) => {
    //     console.log("error fetching photos", error);
    //   });
    setPhotos(imageURLs);
  }, []);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
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
      <div>
        <p className="tagline">- Pavan</p>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img
            key={photo}
            // src={`https://nature-narratives-backend.onrender.com/api/photos/${photo}`}
            src={photo}
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
              // src={`https://nature-narratives-backend.onrender.com/api/photos/${photos[selectedPhotoIndex]}`}
              src={photos[selectedPhotoIndex]}
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
