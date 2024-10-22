import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  // Create an array of filled and empty stars
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < rating ? '★' : '☆';
  });

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
