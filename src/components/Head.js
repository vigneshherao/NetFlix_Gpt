import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import {userIcon} from "../utils/constant"


const Head = () => {
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  console.log(user);
  const navigate = useNavigate();


  const signOutMehod = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
        console.log(error);
    });
    
  }


  useEffect(()=>{
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName,uid,email,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/");
      }
    });

    return ()=> unSubscribe
},[])


  return (
    <div className="flex  justify-between absolute z-10  w-[100%] bg-gradient-to-b from-black">
      <img
        className="w-52 ml-[8%]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {
        user && <div className=" w-52 h-20 flex justify-center items-center">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <img
                {...bindTrigger(popupState)}
                className="w-9 h-9 rounded-sm justify-center  cursor-pointer"
                src={userIcon}
              ></img>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>{user.displayName}</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={signOutMehod}>Signout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
      }
    </div>
  );
};

export default Head;
