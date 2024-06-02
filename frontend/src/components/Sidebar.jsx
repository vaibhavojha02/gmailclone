import React from "react";
import { LuPencil } from "react-icons/lu";
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { IoChevronDownOutline } from "react-icons/io5";

const sideBarItems = [
  {
    icon: <RiInboxFill size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <FaRegStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <FaRegClock size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <AiOutlineSend size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <GrDocument size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <IoChevronDownOutline size={"20px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[18%] ">
      <div className="p-3 ">
        <button className="flex items-center gap-2 bg-[#c2e7ff] p-4 rounded-2xl hover:shadow-lg">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideBarItems.map((items, index) => {
          return (
            <div className="flex items-center  gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-[#a8c7fa]">
              {items.icon}
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
