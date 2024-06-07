import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Sendmail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: ""
  });
  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
     setFormData({...formData,[e.target.name]:e.target.value})
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log(formData);
    await addDoc(collection(db,"emails"),{
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      createdAt : serverTimestamp()
    })
    dispatch(setOpen(false))
    setFormData({
      to: "",
      subject: "",
      message: "" 
    })
  }
  return (
    <div
      className={`${
        open ? `block` : `hidden transition-all delay-75`
      } max-w-6xl shadow-xl bg-white shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => dispatch(setOpen(false))}
        >
          <RxCross2 />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex-col flex p-3 gap-2">
        <input
          name="to"
          onChange={changeHandler}
          value={formData.to}
          type="text"
          placeholder="To"
          className="outline-none py-1"
        ></input>

        <input
        onChange={changeHandler}
          name="subject"
          value={formData.subject}
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        ></input>
        <textarea
          name="message"
          onChange={changeHandler}
          value={formData.message}
          placeholder="message"
        
          cols={"30"}
          rows={"10"}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-[#0B57D0] w-fit px-6 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Sendmail;
