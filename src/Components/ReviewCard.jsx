import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ReviewCard = ({ reviewText, profileImg, name, work }) => {
  return (
    <div className="card border-0  rounded-5 p-4 p-md-5 h-100 col-12">
      {/* Stars */}
      <div className="mb-3 text-warning d-flex">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="bi bi-star-fill me-2 fs-6 "></i>
        ))}
      </div>

      {/* Review Text */}
      <p className="para mb-4">{reviewText}</p>

      {/* Profile */}
      <div className="d-flex align-items-center mt-auto">
        <img
          src={profileImg}
          alt={name}
          className="rounded-circle me-2 mt-3"
          style={{ width: "45px", height: "45px", objectFit: "cover" }}
        />
        <div className="mt-3">
          <div>
            <h6 className="mb-0 fw-bold">{name}</h6>{" "}
          </div>
          <div>
            {" "}
            <h6 className="mb-0 para">{work}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
