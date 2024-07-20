import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import React from "react";

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // Determine if the star should be filled or empty based on the rating
      const starClassName = i <= rating ? "filled" : "empty";
      stars.push(<AiFillStar key={i} className={`star ${starClassName}`} />);
    }
    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

export default RatingStars;
