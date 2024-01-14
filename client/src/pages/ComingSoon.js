import React from "react";
import thumbsUpSmiley from "../graphics/images/thumbs-up-smiley-36.png";

const ComingSoon = () => {
  return (
    <div className="h-screen pt-[135px] px-[75px] bg-gray-100 flex flex-col items-center justify-center">
      <img
        src={thumbsUpSmiley}
        alt="Under Construction"
        className="mb-8"
        style={{ width: "500px", height: "500px" }}
      />
      <h1 className="font-scoutcond font-black uppercase text-6xl py-4">
        Coming Soon!
      </h1>
      <p className="font-productsans text-xl text-center">
        This page is still under construction 🚧!
      </p>
    </div>
  );
};

export default ComingSoon;
