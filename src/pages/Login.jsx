import React from "react";
import DogSVG from "../assets/cute-dog.svg";

export default function Login() {
  return (
    <div className="p-6 flex flex-col">
      <img src={DogSVG} alt="nemo" className="h-64 self-center pb-12" />

      <h1 className="text-4xl font-thin">خوش آمدید!</h1>
      <p className="font-light text-gray-500 py-6 text-sm">
        لطفاً شماره‌‌ٔ موبایلتان را وارد کنید تا بتوانیم با شما در ارتباط باشیم.
      </p>
      <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="name" className="block text-xs text-gray-900 pb-1">
          شماره موبایل
        </label>
        <input
          type="text"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ring-indigo-100"
          placeholder="09123456789"
        />
      </div>
      <p className="font-light text-gray-500 py-6 text-sm">
        با ثبت‌نام در نمو،{" "}
        <span className="text-orange-600 cursor-pointer">شرایط و قوانین</span>{" "}
        را قبول می‌کنم.
      </p>
      <div className="bg-gray-200 text-gray-700 font-thin w-fit px-5 py-3 rounded-md">
        ادامه
      </div>
    </div>
  );
}
