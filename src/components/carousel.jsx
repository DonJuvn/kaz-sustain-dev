import React, { useState } from "react";

const Carousel = () => {
   const [currentImage, setCurrentImage] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(false);

   // Array of images for the carousel
   const images = [
      "img/carousel-1.png",
      "img/carousel-2.png",
   ];

   // Function to toggle between images
   const toggleImage = () => {
      if (!isTransitioning) {
         setIsTransitioning(true);
         setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            setIsTransitioning(false);
         }, 200); // Matches the CSS transition duration
      }
   };

   return (
      <div id="carousel">
         <div className="container">
            <div className="carousel">
               <img
                  src={images[currentImage]}
                  alt={`Slide ${currentImage + 1}`}
                  className={`carousel-image ${
                     isTransitioning ? "fade" : ""
                  }`}
                  onClick={toggleImage}
               />
            </div>
         </div>
      </div>
   );
};

export default Carousel;
