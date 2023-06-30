import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="col-md-3 col-12 p-3">
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt="..." />
          <h5 className="card-title fs-3">{title}</h5>
          <p className="card-text fs-5">{text}</p>
          <a href="#" className="btn btn-primary">
            Find Out more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;