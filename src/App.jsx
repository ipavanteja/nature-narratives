import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

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

  return (
    <>
      <div className="App">
        <h1>Nature Narratives</h1>
        <div className="photo-grid">
          {photos.length &&
            photos.map((photo) => {
              const imageUrl = `https://nature-narratives-backend.onrender.com/api/photos/${photo}`;
              return <img key={photo} src={imageUrl} alt={`Photo`} />;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
