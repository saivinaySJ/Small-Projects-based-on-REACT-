import { useState } from "react";

const imagesToBeFetched = [
  "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1690372181721-200f879023e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1611918126831-0a8352d6196f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D",
];

function PracticeData() {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNext() {
    const nextIndex =
      imageIndex + 1 >= imagesToBeFetched.length ? 0 : imageIndex + 1;
    setImageIndex(nextIndex);
  }
  function handlePrev() {
    const prevIndex =
      imageIndex - 1 < 0 ? imagesToBeFetched.length - 1 : imageIndex - 1;
    setImageIndex(prevIndex);
  }
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img src={imagesToBeFetched[imageIndex]} alt="images" />
      <button onClick={handleNext}>next</button>
    </div>
  );
}
export default PracticeData;
