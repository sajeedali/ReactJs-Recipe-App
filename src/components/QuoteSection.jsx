import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteSection = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        voluptate, perspiciatis explicabo, ex quasi praesentium beatae quae iure
        porro amet mollitia inventore expedita, quia ab atque accusamus sint
        soluta cupiditate.
      </p>
      <p className="quote-author">- Anthony</p>
    </div>
  );
};

export default QuoteSection;
