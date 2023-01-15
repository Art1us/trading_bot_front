import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./PasswordEyeBtn.css";

function PasswordEyeBtn({ isPasswordVisible, setIsPasswordVisible }) {
  return (
    <>
      {isPasswordVisible ? (
        <AiOutlineEyeInvisible
          className="passwordEyeBtn__icon"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        />
      ) : (
        <AiOutlineEye
          className="passwordEyeBtn__icon"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        />
      )}
    </>
  );
}

export default PasswordEyeBtn;
