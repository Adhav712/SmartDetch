import React from "react";
import "./ImageLinkform.css";
import "tachyons";

const ImageLinkForm = ({ onInputchange, onbuttonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures!"}
      </p>
      <div className="tc bar">
        <div className=" form  pa4 br3 shadow-3 center">
          <input
            type="text"
            name="url"
            className=" f4 pa2 w-80 center"
            onChange={onInputchange}
          ></input>
          <button
            className="w-20 grow f4 link ph3 pv2 dib white"
            onClick={onbuttonSubmit}
          >
            Detch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
