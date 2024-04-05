import React from "react";
import { userIcon } from "../utils/constant";
import { FaRegBell } from "react-icons/fa6";
import { toggleGptBtn } from "../utils/gptSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const SignInOption = () => {
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

  const gptToggleFun = () => {
    dispatch(toggleGptBtn());
  };

  return (
    <div className=" w-52 h-20 flex justify-center items-center gap-6">
      <div>
        <button
          className="bg-red-700 font-semibold text-white p-2 rounded-md font-sans"
          onClick={gptToggleFun}
        >
          GptSearch
        </button>
      </div>
      <div className="">
        <FaRegBell className="text-white text-xl cursor-pointer" />
      </div>
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
              <MenuItem onClick={""}>My Acount</MenuItem>
              <MenuItem onClick={signOutMehod}>Sign Out</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
};

export default SignInOption;
