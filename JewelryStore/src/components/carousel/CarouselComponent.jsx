import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "../../styles/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LazyCarouselItem = lazy(() => import("./LazyItemComponent"));

export default function CarouselComponent() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/curated?per_page=5",
          {
            headers: {
              Authorization:
                "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl",
            },
          }
        );
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-main-container">
      <div className="carousel-content">
        <Slider className="carousel-slide-container" {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src.medium} alt={image.photographer} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
