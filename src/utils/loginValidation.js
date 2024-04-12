import React from "react";

const loginValidation = (email, password) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmail) return "Email is not valid!";
  if (!isPassword)
    return "Password is not valid! Needs Uppercase, Special Character, and 8+ Characters( For example: Abc@1234 )";

  return null;
};

export default loginValidation;
