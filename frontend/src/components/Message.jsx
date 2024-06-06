import React, { useState } from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();
  const openMail=()=>{
     navigate("/mail/123rrrt45454")
  }
  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-1 text-sm hover:cursor-pointer hover:shadow-md hover:border hover:border-gray-300">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-400 truncate inline-block max-w-full">
          cnjodwcnj cdjfdjw jsfh jdjfd dkfdwf difjdwjijf djfdwklfndwkl
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
       Time
      </div>
    </div>
  );
};

export default Message;
