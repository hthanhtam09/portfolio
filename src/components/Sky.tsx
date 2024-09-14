import { ThemeContext } from "@/app/page";
import { ThemeMode } from "@/enums";
import React, { useContext } from "react";

type SkyProps = {
  isClouds?: boolean;
};

const Sky = ({ isClouds = true }: SkyProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full overflow-hidden z-0">
      {theme === ThemeMode.DARK ? (
        <>
          <div className="stars absolute inset-0 bg-black bg-stars z-0"></div>
          <div className="twinkling absolute inset-0 bg-transparent bg-twinkling z-10 animate-twinkling"></div>
          {isClouds && (
            <div className="clouds bottom-1/4 absolute inset-0 bg-transparent bg-clouds z-20 animate-clouds"></div>
          )}
        </>
      ) : (
        <>
          <div className="sky absolute inset-0 bg-blue-300 z-0"></div>
          {isClouds && (
            <div className="clouds bottom-1/4 absolute inset-0 bg-transparent bg-clouds z-20 animate-clouds"></div>
          )}
        </>
      )}
    </div>
  );
};

export default Sky;
