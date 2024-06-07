import React, { useEffect, useState } from "react";
import Message from "./Message";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice.js";

const Messages = () => {
  const dispatch = useDispatch();
  const { searchText, emails } = useSelector((store) => store.appSlice);
  const [tempEmail,setTempEmail] = useState(emails)

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe();
  }, []);
  //searching logic here always remeber 2:45:35 at lecture in case you forget
  useEffect(() => {
     const filterdEmails = emails?.filter((email)=>{
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase())||email?.to?.toLowerCase().includes(searchText.toLowerCase())||email?.message?.toLowerCase().includes(searchText.toLowerCase())
     })
     setTempEmail(filterdEmails);
  },[searchText,emails])

  return (
    <div>
    {tempEmail && tempEmail?.map((email) => <Message email = {email} />)}
    </div>
  );
};

export default Messages;
