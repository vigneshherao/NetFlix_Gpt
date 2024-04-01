import React, { useRef, useState } from "react";
import Head from "./Head";
import loginValidation from "../utils/loginValidation";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validMessage, setValidMessage] = useState("");
  const dispatch = useDispatch();
  const signInHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const authenticate = () => {
    const validAunticate = loginValidation(
      email.current.value,
      password.current.value
    );
    setValidMessage(validAunticate);
    if(validAunticate) return;

    if(!isSignIn){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }).then(() => {
            const {displayName,uid,email,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            setValidMessage(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidMessage(errorCode + errorMessage)
        });
    }
    else{
      const auth = getAuth();
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidMessage("User not found!")
        });
    }
  };


  return (
    <div>
      <Head />
      <div className="absolute w-full h-full">
        <img
          className="object-cover w-full h-full brightness-50"
          src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58"
          alt="background"
        ></img>
      </div>
      <div className="md:rounded-lg bg-opacity-60 absolute sm:w-4/5 md:w-6/12 lg:min-w-[300px] lg:w-1/4 text-white p-12 bg-black flex flex-col justify-center items-center m-auto my-36 right-0 left-0">
        <h2 className="p-4 text-3xl text-left">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {isSignIn ? null : (
          <input
            ref={username}
            type="text"
            placeholder="User Name"
            className="w-full p-4 m-2 my-4 bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-4 m-2 my-4 bg-gray-800"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="w-full p-4 m-2 my-4 bg-gray-800"
        />
        {validMessage && <p className="text-sm text-red-600">{validMessage}</p>}
        <button
          onClick={authenticate}
          type="button"
          className="w-full bg-red-700 p-4 font-semibold rounded-md m-4"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <div>
            <input type="checkbox"></input>
            <label className="ml-2 my-2">Remember me</label>
          </div>
        )}
        <p
          className="cursor-pointer hover:underline mt-2"
          onClick={signInHandler}
        >
         {isSignIn? "New to Netflix? Sign up now":"Already a User? Sign In Now"}
        </p>
        <p className="text-sm m-2 text-blue-300 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot
        </p>
      </div>
    </div>
  );
};

export default Login;
