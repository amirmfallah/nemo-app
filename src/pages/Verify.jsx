import React, { useState } from "react";
import OTPInput from "react-otp-input";
import DogSVG from "../assets/cute-dog.svg";

export default function Verify() {
  const [otp, setOtp] = useState();

  return (
    <div className="p-6 flex flex-col">
      <img src={DogSVG} alt="nemo" className="h-64 self-center pb-12" />
      <h1 className="text-2xl font-thin">کد تأیید را وارد کنید</h1>
      <p className="font-light text-gray-500 py-6 text-sm">
        کد تأیید را به شمارهٔ <span className="text-black">09112475534</span>{" "}
        فرستادیم.{" "}
      </p>
      <p className="font-light pb-6 text-sm">
        شمارهٔ موبایل اشتباه است؟{" "}
        <span className="text-orange-600">ویرایش</span>
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
        با ثبت‌نام در نمو،{" "}
        <span className="text-orange-600 cursor-pointer">شرایط و قوانین</span>{" "}
        را قبول می‌کنم.
      </p>
      <p className="font-light pt-4">ارسال دوبارهٔ کد تأیید تا 00:52</p>
    </div>
  );
}

// {{
//   color: "black",
//   padding: "12px",
//   width: "3rem",
//   border: "none",
//   borderBottom: "1px solid",
// }}
