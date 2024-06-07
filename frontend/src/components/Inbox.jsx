import React, { useState } from "react";
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import {motion} from "framer-motion"

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
    <motion.div
      className="flex-1 bg-white rounded-xl mx-5"
      whileHover={{ scale: 1.00 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="hover:bg-gray-100 hover:rounded-full"><MdKeyboardArrowLeft size={"24px"}/></button>
          <button className="hover:bg-gray-100 hover:rounded-full"><MdKeyboardArrowRight size={"24px"}/></button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-2">
          {mailType.map((items, index) => (
            <button
              key={index}
              className={` ${mailTypeSelected === index ? `border-b-4 border-b-blue-600 text-blue-600` : `border-b-4 border-b-transparent`} flex w-[25%] gap-3 items-center px-2 h-[42px] hover:bg-gray-300`}
              onClick={() => setMailTypeSelected(index)}
            >
              {items.icon}
              <p>{items.text}</p> 
            </button>
          ))}
        </div>
        <Messages />
      </div>
    </motion.div>
  );
};

export default Inbox;
