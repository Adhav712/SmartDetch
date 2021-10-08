import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="f3 tc white">
      <div className="font-family: courier New,Courier,monospace">
        {`${name}, your current rank is ...`}
      </div>
      <div className="f2 font-family:Courier new ">{entries}</div>
    </div>
  );
};

export default Rank;
