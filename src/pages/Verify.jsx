import React, { useState } from "react";
import OTPInput from "react-otp-input";
import DogSVG from "../assets/cute-dog.svg";
import { useNavigate } from "react-router-dom";

export default function Verify() {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col">
      <img src={DogSVG} alt="nemo" className="h-64 self-center pb-12" />
      <h1 className="text-2xl font-thin">Please enter the verification code</h1>
      <p className=" text-gray-500 py-6 text-sm">
        We have sent the verification code to{" "}
        <span className="text-black">09112475534</span>{" "}
      </p>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} style={{}} />}
        inputType="num"
        containerStyle={{
          direction: "ltr",
          gap: "6px",
          justifyContent: "center",
        }}
        inputStyle="border-b-2 border-black w-20 w-[3rem] p-3 text-center focus:border-orange-600 focus:outline-none text-xl rounded-none"
      />
      <p className="font-light text-gray-500 py-6 text-sm">
        By signing up I accept{" "}
        <span className="text-orange-600 cursor-pointer">
          Terms and Conditions
        </span>
        .
      </p>
      <div
        className="bg-gray-700 text-gray-100  w-fit px-5 py-3 rounded-md"
        onClick={() => navigate("/")}
      >
        Continue
      </div>
      <p className="font-light pt-4">00:52 until re-send</p>
    </div>
  );
}
