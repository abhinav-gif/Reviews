import React from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Person = ({ index, setIndex }) => {
  const { name, job, image, text } = reviews[index % reviews.length];
  const prevHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };
  const nextHandler = () => {
    setIndex(index + 1);
  };
  const supriseHandler = () => {
    if (index !== Math.round(Math.random() * 10) % reviews.length) {
      setIndex(Math.round(Math.random() * 10));
    } else {
      setIndex(Math.round(Math.random() * 10) + 1);
    }
  };
  return (
    <>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn btn-hipster" onClick={supriseHandler}>
        suprise me
      </button>
    </>
  );
};

export default Person;
