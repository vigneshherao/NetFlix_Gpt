import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { userIcon } from "../utils/constant";
import { FaRegBell } from "react-icons/fa6";
import {toggleGptBtn} from "../utils/gptSlice"


const Head = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutMehod = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const gptToggleFun = () =>{
      dispatch(toggleGptBtn())
  } 

  return (
    <div className="flex  justify-between sm:px-7 absolute z-10  w-[100%] bg-gradient-to-b from-black">
      <div className="flex">
        <div>
          <img
            className="w-48 sm:w-52 ml-[5%]"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
        </div>
        <div className="hidden sm:flex ml-8">
          <ul className="flex justify-center items-center gap-8 text-white">
            <li className="hover:opacity-70 cursor-pointer">Home</li>
            <li  className="hover:opacity-70 cursor-pointer">Movies</li>
            <li  className="hover:opacity-70 cursor-pointer">New & Popular</li>
            <li  className="hover:opacity-70 cursor-pointer">My List</li>
          </ul>
        </div>
      </div>
      {user && (
        <div className=" w-52 h-20 flex justify-center items-center gap-6">
          <div><button className="bg-red-700 font-semibold text-white p-2 rounded-md font-sans" onClick={gptToggleFun}>GptSearch</button></div>
          <div className=""><FaRegBell className="text-white text-xl cursor-pointer" /></div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <img
                  {...bindTrigger(popupState)}
                  className="w-9 h-9 rounded-sm justify-center  cursor-pointer"
                  src={userIcon}
                ></img>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    {user.displayName}
                  </MenuItem>
                  <MenuItem onClick={""}>My Acount</MenuItem>
                  <MenuItem onClick={signOutMehod}>Sign Out</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      )}
    </div>
  );
};

export default Head;
