import React, { useState } from "react";
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

import { IoMdMore, IoMdRefresh } from "react-icons/io";
import Messages from "./Messages";
const mailType = [
  {
    icon: <RiInboxFill size={"20px"}/>,
    text: "Primary",
  },
  {
    icon: <BsTag size={"20px"}/>,
    text: "Promotions",
  },
  {
    icon: <BsPeople size={"20px"}/>,
    text: "Social",
  },
];
const Inbox = () => {
  const [mailTypeSelected,setMailTypeSelected] =  useState(0)
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full   hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-2">
          {mailType.map((items, index) => {
            return (
              
              <button key = {index} className={` ${mailTypeSelected==index?`border-b-4 border-b-blue-600 text-blue-600`:`border-b-4 border-b-transparent`}  flex w-[25%] gap-3 items-center px-2 h-[42px] hover:bg-gray-300`} onClick={() => setMailTypeSelected(index)}> 
                {items.icon}
                <p>{items.text}</p>
              </button>
            );
          })}
        </div>
      </div>
      <Messages/>
    </div>
  );
};

export default Inbox;
