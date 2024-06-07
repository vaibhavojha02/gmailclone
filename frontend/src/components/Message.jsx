import React, { useState } from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from "framer-motion"

const Message = ({email}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMail=()=>{
    dispatch(setSelectedEmail(email))
     navigate(`/mail/${email.id}`)
  }
  return (
    <motion.div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-1 text-sm hover:cursor-pointer hover:shadow-md hover:border hover:border-gray-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className={`text-black font-bold truncate inline-block max-w-full`}>
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        {new Date(email?.createdAt?.seconds * 1000).toLocaleString()}
      </div>
    </motion.div>
  );
};

export default Message;
