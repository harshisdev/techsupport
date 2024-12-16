import React from "react";

const Marquee = ({ text }) => {
  return (
    <div
      className="marquee-container"
      onMouseOver={(e) => e.currentTarget.classList.add("paused")}
      onMouseOut={(e) => e.currentTarget.classList.remove("paused")}
    >
      <span className="marquee-text text-danger">
        {text}
      </span>
    </div>
  );
};

export default Marquee;
