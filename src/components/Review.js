import React, { useState } from 'react';

const Review = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleRandom = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === currentIndex && reviews.length > 1);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="review">
      <img
        src={currentReview.image}
        alt={currentReview.name}
        className="person-img"
      />
      <h2 id={`author-${currentReview.id}`} className="author">
        {currentReview.name}
      </h2>
      <p className="job">{currentReview.job}</p>
      <p className="info">{currentReview.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </div>
  );
};

export default Review;