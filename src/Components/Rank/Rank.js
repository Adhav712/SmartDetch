import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="f3 tc white">
      <div>
        {name}, your current rank is...
      </div>
      <div>{entries}</div>
    </div>
  );
};

export default Rank;
