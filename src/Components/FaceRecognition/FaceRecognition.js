import React from "react";
import "./FaceRecognition.css";

const FaceRecogniition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 face">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            left: box.left_col,
            top: box.top_row,
            right: box.right_col,
            bottom: box.bottom_row,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecogniition;
