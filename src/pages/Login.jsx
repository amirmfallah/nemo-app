import React from "react";
import DogSVG from "../assets/cute-dog.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col">
      <img src={DogSVG} alt="nemo" className="h-64 self-center pb-12" />

      <h1 className="text-4xl font-thin">Welcome!</h1>
      <p className="font-light text-gray-500 py-6 text-sm">
        Please enter your mobile number to continue.
      </p>
      <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="name" className="block text-xs text-gray-900 pb-1">
          Mobile number
        </label>
        <input
          type="text"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ring-indigo-100"
          placeholder="04123456789"
        />
      </div>
      <p className="font-light text-gray-500 py-6 text-sm">
        By signing up I accept{" "}
        <span className="text-orange-600 cursor-pointer">
          Terms and Conditions
        </span>
        .
      </p>
      <div
        className="bg-gray-700 text-gray-100  w-fit px-5 py-3 rounded-md"
        onClick={() => navigate("/auth/verify")}
      >
        Continue
      </div>
    </div>
  );
}
