import React from "react";
import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewsBlogCard = ({ blog }) => {
  const { id, image, alt, title, readMoreText } = blog;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className=" mt-5">
      {/* Images Section */}
      <div
        className="mb-4 mb-lg-0 cursor-pointer"
        onClick={handleCardClick}
      >
        <Figure
          className="image-anime reveal box rounded-5 w-100 image-figure"
        >
          <img
            src={image}
            alt={alt}
            className="img-fluid rounded-5 shadow w-100"
            style={{
              maxHeight: "300px",
              transform: "translate(0px,0px)",
            }}
          />
        </Figure>
      </div>

      {/* Title Section */}
      <div onClick={handleCardClick} className="cursor-pointer">
        <h5 className="fw-bold mt-4 dark-text">{title}</h5>
      </div>

      {/* Read More Section */}
      <div onClick={handleCardClick} className="cursor-pointer">
        <h5 className="fw-bold mt-4 light-text">
          {readMoreText} <i className="bi bi-arrow-right fs-5"></i>
        </h5>
      </div>
    </div>
  );
};

export default NewsBlogCard;
