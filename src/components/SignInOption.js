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
import { btnLang, selectLang } from "../utils/multilingual";
import { changeLanguage } from "../utils/multiSlice";

const SignInOption = () => {
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.gptButton);
  const lang = useSelector((store) => store?.multilang?.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutMehod = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };

  const gptToggleFun = () => {
    dispatch(toggleGptBtn());
  };

  return (
    <div className=" w-52 h-20 flex justify-center items-center gap-6">
      <select
        className="hidden md:block border-none bg-slate-200 p-2 rounded-md"
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
      >
        {selectLang.map((lang) => (
          <option key={lang.id} id={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
      <div>
        <button
          className="bg-red-700 font-semibold text-white p-2 rounded-md font-sans"
          onClick={gptToggleFun}
        >
          {gpt ? "Home" : btnLang[lang].gptSearchBtn}
        </button>
      </div>
      <div className="hidden sm:block">
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
              <MenuItem>My Acount</MenuItem>
              <MenuItem onClick={signOutMehod}>Sign Out</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
};

export default SignInOption;
