import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import prevButtonImage from "../../assets/jewelry-left.png";
import nextButtonImage from "../../assets/jewelry-right.png";

import "../../styles/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselComponent() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization:
              "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl",
          },
          params: {
            query: "Jewelry",
            orientation: "portrait",
            per_page: 6,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const PrevArrow = (props) => (
    <img
      src={prevButtonImage}
      alt="Previous"
      className="custom-slick-arrow custom-slick-prev jewelry-arrow"
      onClick={props.onClick}
    />
  );

  const NextArrow = (props) => (
    <img
      src={nextButtonImage}
      alt="Next"
      className="custom-slick-arrow custom-slick-next jewelry-arrow"
      onClick={props.onClick}
    />
  );
  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setCurrentIndex(next % images.length),
  };

  return (
    <div className="carousel-main-container">
      <div className="carousel-content">
        <Slider
          ref={sliderRef}
          className="carousel-slide-container"
          {...settings}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image.src.large}
                alt={image.photographer}
                className="lazy-img"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src.medium}
            alt={image.photographer}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
