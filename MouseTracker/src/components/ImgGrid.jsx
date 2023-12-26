// ImgGrid.js
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import "../styles/imggrid2.css";

const ImgGrid = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const imgGridRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey =
          "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl";

        const apiUrl = "https://api.pexels.com/v1/search";

        const config1 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: "Bears",
            orientation: "portrait",
            per_page: 3,
          },
        };
        const config2 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: "Trees",
            orientation: "portrait",
            per_page: 3,
          },
        };
        const config3 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: "Buildings",
            orientation: "portrait",
            per_page: 3,
          },
        };
        const response1 = await axios.get(apiUrl, config1);
        const response2 = await axios.get(apiUrl, config2);
        const response3 = await axios.get(apiUrl, config3);

        setImages1(response1.data.photos);
        setImages2(response2.data.photos);
        setImages3(response3.data.photos);
        setTimeout(() => {
          gsap.to("#forward", {
            duration: 45.2,
            yPercent: -100,
            ease: "slow(0.3,0.4,false)",
            delay: 1,
          });
          gsap.to(".img-grid-display-reverse", {
            duration: 45.2,
            yPercent: 100,
            ease: "slow(0.3,0.4,false)",
            delay: 1,
          });
        }, 1000);
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchImages();
  }, []); // Run the effect only once on component mount

  return (
    <div className="img-grid-container" ref={imgGridRef}>
      <div className="img-grid">
        <div className="img-grid-display">
          {images1.map((image, index) => (
            <img
              key={image.id}
              id="forward"
              src={image.src.medium}
              alt={image.photographer}
              style={{
                "--column": index % 3,
                "--row": Math.floor(index / 3),
              }}
            />
          ))}
        </div>
        <div className="img-grid-display-reverse">
          {images2.map((image, index) => (
            <img
              key={image.id}
              id="reverse"
              src={image.src.medium}
              alt={image.photographer}
              style={{
                "--column": index % 3,
                "--row": Math.floor(index / 3),
              }}
            />
          ))}
        </div>
        <div className="img-grid-display">
          {images3.map((image, index) => (
            <img
              key={image.id}
              id="forward"
              src={image.src.medium}
              alt={image.photographer}
              style={{
                "--column": index % 3,
                "--row": Math.floor(index / 3),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgGrid;
