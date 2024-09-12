import React from "react";

type SkyProps = {
  isClouds?: boolean;
};

const Sky = ({ isClouds = true }: SkyProps) => {
  return (
    <div className="w-full h-full overflow-hidden z-0">
      <div className="stars absolute inset-0 bg-black bg-stars z-0"></div>
      <div className="twinkling absolute inset-0 bg-transparent bg-twinkling z-10 animate-twinkling"></div>
      {isClouds && (
        <div className="clouds bottom-20 absolute inset-0 bg-transparent bg-clouds z-20 animate-clouds"></div>
      )}
    </div>
  );
};

export default Sky;
