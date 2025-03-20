import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg != null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((myImg, index) => (
            <img
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              key={myImg.id}
              src={myImg.download_url}
              alt={myImg.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
