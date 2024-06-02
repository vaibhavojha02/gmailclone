import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Avatar from 'react-avatar';


const Navbar = () => {
  return (
    <div className="flex items-center mx-3 justify-between h-16 ">
      <div className="flex items-center gap-10">
        <div className="flex items-center  gap-2">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            className="w-8"
            alt="gmaillogo"
          ></img>
          <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mx-auto">
        <div className="flex items-center bg-[#eaf1fb] px-2 py-3 rounded-full ">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            className=" rounded-full w-full  bg-transparent px-1 outline-none"
            placeholder="Search mail"
          ></input>
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoSettingsOutline  size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <BsFillGrid3X3GapFill size={"24px"} />
          </div>
          <div>
            <Avatar src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLfr7O3n6eqrsbTc3+Cxt7rh4+TV2NqnrrHIzM7Lz9G4vcC/xMbDyMrO0tNHfP24AAAEMUlEQVR4nO2cW5LjIAwAbcTTBnP/2y5+JOvMOAkgLNha+mfy2aWSBQIxw9DpdDqdTqfT6XQ6nU4HATAGSuiAGMLP2jofARDeyXGHj9J5Ba0ag9DLaPh4hhs56aFBY6Zmy19dD2Nu5+aE2SSvXA/hcW4pi2HQl4H9i5HtpAQo91l2C/Gi2vBl+n0enH2taMJ3ipHdUljXVg0skbYBM9eOLyTYhgBX9k2zXX2r2sbm7ROj68UXdKptiG+1+gAqWXatZ9Xqr00PbvB1dWTTE/fwrZO+OamwU0OXZaXCFl5H7wvCZEdX0lcHsNm2YXdGbqvzbdfwUvsmrr6vmIk4G4T8LvUpvMS6GcvvS3hpswGyq9iBY6S+SFvipQJRdHdIGyGGqgsblLWB4erCSLwQA9Z23fbS6Qq0LuXChluBD126XS94vO5IqDvhbQl7itTThUtdT2Xbdf8BXcLcRduS6s4FdCnrLj4ZCOvuUGJVI2ze8w9wnljC9oehbbmlsx0Y4kzk0F0o97sz+lsjvaVA92ojaeeObickaeOOXYY58anTv3WKMyhUbeDUZ2S5FxOHLvXtMKCOICm79sPXIYJLfby7gribIA/uOn2T62voduYnVNSQyG847RLxIPdwhJPfoxy+WUtbtZEGGHLSgXKj+8M3Y2PGK1SFp29y01bTNpDaE1eezQKfkg+VRhnOJGwlTQNzeqAjrwQ5Za/+HlA2JiHMUvcrOzF/mYfdBiDrJ8IDUG78JMzl0sz47gow7d5GmI+uodDuwCCcuchhbswkmgrtAwbaSRnSlO/Zuv6VIbAtum4AG7RfnN1wbvF6aGlG/gIIwVQioNT2u3Hgldo6l+wR1X6eQiLIR96OISGWyesQ6qEZ8ZCc2q+aoQgcmqfFIWC4DNqzVlClRzsBDMRst2rwbVHjUtpFQ7Uvb00Ab7lJ2fAaIyehKlThsCrM7uf7qRg4D0EmHpBmEFLg67bmrfFoF0GWFQBiyVZ9KluaNgiUthk58Bsj59ubCwB//Yguh7CtVHfWNgCdn7HXTDeWCRHV5STBR3+PcPjAPnYM2cL2jr175CO6HN/Rla5qkd1urnDhqxXwd4X2IVzwJSawAmNu33yLvVwKiXBvaHffQtMucNs39oMiLzFB31K+rihw3VZi9jXeFztCUmQEKx6DG/HOeUyJ88XElzQTdhD5i7tVz/XNrw8U9fa3b2b9ZRH/xuAWsta3ArNieWQN8EGBtxG5vjmfW61UWEm/Ikq63isMt6kdJ1S0TZ8nKfDCC4VMi22972wnbbEo8dIAR9KkWY3V95WkVyC028ZL3YS1AvN+vRQJM6j42Wc8fImtvbjp0VJEz8zi36mWIHo6TrUQ3OiXxBVanitiXxKXeN5VgsiVAmpuHU/ETho1UHU34po20YhuZI8pJG+C2CM+1gitzBT8N/wBcX44zAWEsQEAAAAASUVORK5CYII=" size ="40" round ={true} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
