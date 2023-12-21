// ImgGrid.js
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import "../styles/imggrid.css";

const ImgGrid = () => {
  const [images, setImages] = useState([]);
  const imgGridRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Your Pexels API key
        const apiKey =
          "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl";

        // Pexels API endpoint for popular photos (you can adjust the endpoint based on your needs)
        const apiUrl = "https://api.pexels.com/v1/curated";

        // Axios request configuration
        const config = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            per_page: 9, // Adjust the number of images you want to fetch
          },
        };

        // Make a request to the Pexels API using axios
        const response = await axios.get(apiUrl, config);

        // Update the state with the fetched images
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchImages();
  }, []); // Run the effect only once on component mount

  useEffect(() => {
    if (imgGridRef.current) {
      const targets = Array.from({ length: 9 }, (_, i) => `#img-${i + 1}`).join(
        ", "
      );

      const delayAnimation = () => {
        gsap.from(targets, {
          duration: 1,
          stagger: 0.2,
          opacity: 0,
        });
      };

      // Use a timeout to delay the animation until after the images are loaded
      setTimeout(delayAnimation, 1000);
    }
  }, [images]);

  return (
    <div className="img-grid" ref={imgGridRef}>
      {images.map((image, index) => (
        <img
          key={image.id}
          id={`img-${index + 1}`}
          src={image.src.medium}
          alt={image.photographer}
        />
      ))}
    </div>
  );
};

export default ImgGrid;
