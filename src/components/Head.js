import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import SignInOption from "./SignInOption";
import { logo, navItems } from "../utils/constant";

const Head = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe;
  }, []);

  return (
    <div className="flex  justify-between sm:px-7 absolute z-10  w-[100%] bg-gradient-to-b from-black md:pr-28">
      <div className="flex">
        <div>
          <img className="w-48 sm:w-52 ml-[5%]" src={logo}></img>
        </div>
        <div className="hidden sm:flex ml-8">
          <ul className="flex justify-center items-center gap-8 text-white">
            {navItems.map((item) => (
              <li className="hover:opacity-70 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {user && <SignInOption />}
    </div>
  );
};

export default Head;
