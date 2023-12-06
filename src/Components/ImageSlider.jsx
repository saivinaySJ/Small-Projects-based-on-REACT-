import { useState } from "react";
import "../Assets/Styles/ImageSlider.css";
import { useEffect } from "react";

const data = [
  "https://images.unsplash.com/photo-1565772838491-cbeb32fac6ca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1614983652406-41044db11dc6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1620052581237-5d36667be337?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
];
function ImageSlider() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function handleNext() {
    const nextIndex =
      activeImageIndex + 1 >= data.length ? 0 : activeImageIndex + 1;
    setActiveImageIndex(nextIndex);
  }
  function handlePrevious() {
    const previousIndex =
      activeImageIndex - 1 < 0 ? data.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(previousIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);
  return (
    <div className="image-container">
      <button className="previous" onClick={handlePrevious}>
        Previous
      </button>
      <img src={data[activeImageIndex]} alt="images" />
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
export default ImageSlider;
