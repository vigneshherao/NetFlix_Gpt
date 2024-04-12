import React from "react";
import SignInOption from "./SignInOption";
import { logo, navItems } from "../../utils/constants/constant";
import useAuth from "../../utils/hooks/useAuth";
import { useSelector } from "react-redux";

const Head = () => {
  const user = useSelector((store) => store.user);
  useAuth();
  return (
    <div className="flex  justify-between pr-8 sm:px-7 absolute z-10  w-[100%] bg-gradient-to-b from-black md:pr-28">
      <div className="flex">
        <div>
          <img className="my-3 w-32 sm:w-52 sm:m-0 ml-[5%]" src={logo}></img>
        </div>
        {user && (
          <div className="hidden md:hidden sm:flex ml-8">
            <ul className="flex justify-center items-center gap-8 text-white">
              {navItems.map((item, index) => (
                <li key={index} className="hover:opacity-70 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {user && <SignInOption />}
    </div>
  );
};

export default Head;
