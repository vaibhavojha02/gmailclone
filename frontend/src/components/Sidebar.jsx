import React from "react";
import { LuPencil } from "react-icons/lu";
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sideBarItems = [
  {
    id:1,
    icon: <RiInboxFill size={"20px"} />,
    text: "Inbox",
  },
  {
    id:2,
    icon: <FaRegStar size={"20px"} />,
    text: "Starred",
  },
  {
    id:3,
    icon: <FaRegClock size={"20px"} />,
    text: "Snoozed",
  },
  {
    id:4,
    icon: <AiOutlineSend size={"20px"} />,
    text: "Sent",
  },
  {
    id:5,
    icon: <GrDocument size={"20px"} />,
    text: "Drafts",
  },
  {
    id:6,
    icon: <IoChevronDownOutline size={"20px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[18%] ">
      <div className="p-3 ">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 bg-[#c2e7ff] p-4 rounded-2xl hover:shadow-lg">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideBarItems.map((items, index) => {
          return (
            <Link to={items.text}>
            <div className="flex items-center  gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-[#a8c7fa]" key ={items.id}>
              {items.icon}
              <p>{items.text}</p>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
