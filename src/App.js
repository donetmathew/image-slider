import "./styles.css";
import car1 from "./images/car-1.jpg";
import car2 from "./images/car-2.jpg";
import car3 from "./images/car-3.jpg";
import car4 from "./images/car-4.jpg";
import car5 from "./images/car-5.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [car1, car2, car3, car4, car5];

export default function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "1200px",
        aspectRatio: "10/6",
        margin: "0 auto"
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
