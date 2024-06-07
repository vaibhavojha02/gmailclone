import React from "react";

import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";

const Mail = () => {
  const { selectedEmail } = useSelector((store) => store.appSlice);
  const navigate = useNavigate();
  const deletion = async () => {
    await deleteDoc(doc(db, "emails", `${selectedEmail.id}`));
    navigate("/");
  };
  return (
    <motion.div
    className="flex-1 bg-white rounded-xl ml-5"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div
      className="flex items-center justify-between px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <div className="flex items-center gap-2 text-gray-700 py-2">
        <motion.div
          onClick={() => navigate("/")}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdArrowBack size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <BiArchiveIn size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdOutlineReport size={"20px"} />
        </motion.div>
        <motion.div onClick={() => deletion()} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdDeleteOutline size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdOutlineMarkEmailUnread size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdOutlineWatchLater size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdOutlineAddTask size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdOutlineDriveFileMove size={"20px"} />
        </motion.div>
        <motion.div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IoMdMore size={"20px"} />
        </motion.div>
      </div>
      <div className="flex items-center gap-2">
        <motion.button className="hover:rounded-full hover:bg-gray-100" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdKeyboardArrowLeft size={"24px"} />
        </motion.button>
        <motion.button className="hover:rounded-full hover:bg-gray-100" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MdKeyboardArrowRight size={"24px"} />
        </motion.button>
      </div>
    </motion.div>
    <motion.div
      className="h-[90vh] overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
    >
      <div className="flex justify-between bg-white items-center gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
          <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
        </div>
        <div className="flex-none text-gray-400 my-5 text-sm">
          <p>
            {new Date(
              selectedEmail?.createdAt?.seconds * 1000
            ).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        <h1>{selectedEmail?.to}</h1>
        <span>to me</span>
      </div>
      <div className="my-10">
        <p>{selectedEmail?.message}</p>
      </div>
    </motion.div>
  </motion.div>

  );
};

export default Mail;
