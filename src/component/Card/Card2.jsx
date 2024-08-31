import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card2({  title, text, text2, text3, text4, text5, text6 }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>

        <p className="card-text text-secondary">
          {text2
            ? text2
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>

        <p className="card-text text-secondary">
          {text2
            ? text3
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>

        
      </div>
    </div>
  );
}

Card2.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card2;