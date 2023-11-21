import react, { useState, useRef, createRef } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import "./ImageSlider.css";

export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const onShowNext = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const onShowPrev = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const onBottomNav = (i) => {
    setImageIndex(i);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        {imageUrls.map((url, i) => {
          return (
            <img
              key={url}
              className="image-slider-img"
              src={url}
              alt=""
              style={{
                translate: `${-100 * imageIndex}%`
              }}
            />
          );
        })}
      </div>

      <button
        onClick={onShowPrev}
        className="image-slider-btn image-slider-btn-left"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={onShowNext}
        className="image-slider-btn image-slider-btn-right"
      >
        <ArrowBigRight />
      </button>
      <div className="image-slider-dot-btn-container">
        {imageUrls.map((_, i) => (
          <button
            className="image-slider-dot-btn"
            onClick={() => onBottomNav(i)}
            key={i}
          >
            {i === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
