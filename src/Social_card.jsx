import React from "react";
import avatar from "./assets/avatar-jessica.jpeg";

const SocialCard = () => {
  return (
    <div className="flex flex-col items-center text-center bg-Grey-800 w-xs m-auto py-6 gap-6 rounded-xl">
      <img
        className="w-16 rounded-full"
        src={avatar}
        alt="Profile_img"
      />
      <div>
        <h1 className="text-2xl">Jessica Randall</h1>
        <p className="text-xs text-Green mt-1">London, United Kingdom </p>
      </div>
      <p className="text-xs">"Front-end developer and avid reader."</p>
      <div className="flex flex-col gap-3.5 text-xs w-[80%] font-semibold ">
        <button className="bg-Grey-700 py-3 rounded-md hover:bg-Green hover:text-black cursor-pointer">
          GitHub
        </button>
        <button className="bg-Grey-700 py-3 rounded-md hover:bg-Green hover:text-black cursor-pointer">
          Frontend Mentor
        </button>
        <button className="bg-Grey-700 py-3 rounded-md hover:bg-Green hover:text-black cursor-pointer">
          LinkedIn
        </button>
        <button className="bg-Grey-700 py-3 rounded-md hover:bg-Green hover:text-black cursor-pointer">
          Twitter
        </button>
        <button className="bg-Grey-700 py-3 rounded-md hover:bg-Green hover:text-black cursor-pointer">
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialCard;
