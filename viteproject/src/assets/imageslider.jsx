import React, { useState } from "react";
import "./IamgeSlider.css";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1019/800/400"
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="slider-wrapper">
      <div className="slider">
        <button className="left-arrow" onClick={prevSlide}>❮</button>
        <button className="right-arrow" onClick={nextSlide}>❯</button>

        {images.map((img, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={img} alt="travel" className="image" />
            )}
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="control-btn" onClick={prevSlide}>Prev</button>
        <button className="control-btn" onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

export default ImageSlider;