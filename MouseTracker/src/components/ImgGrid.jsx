// ImgGrid.js
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import "../styles/imggrid.css";

const ImgGrid = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const imgGridRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey =
          "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl";

        const apiUrl = "https://api.pexels.com/v1/search";

        const config = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: "Tigers",
            orientation: "portrait",
            per_page: 3,
          },
        };
        const response = await axios.get(apiUrl, config);

        setImages1(response.data.photos);

        gsap.to(".img-grid", { duration: 5.2, yPercent: -150, delay: 1 });
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchImages();
  }, []); // Run the effect only once on component mount

  return (
    <div className="img-grid-container" ref={imgGridRef}>
      <div className="img-grid">
        {images1.map((image, index) => (
          <img
            key={image.id}
            id={`img-${index + 1}`}
            src={image.src.medium}
            alt={image.photographer}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgGrid;
