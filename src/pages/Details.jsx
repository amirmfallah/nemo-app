import React from "react";
import {
  ChevronLeftIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="flex flex-col h-full relative">
      <img src="/assets/img.jpg" className="w-full" />
      <Link to={"/home"} className="fixed left-0 top-0  ">
        <div className="p-2 bg-white rounded-full m-3">
          <ChevronLeftIcon className="h-5" />
        </div>
      </Link>
      <div className="fixed right-0 top-0">
        <div className="p-2 bg-orange-600 text-white rounded-full m-3 flex items-center gap-2 px-3">
          <span className="text-sm">تماس</span> <PhoneIcon className="h-5" />
        </div>
      </div>
      <div className="bg-slate-200 rounded-t-3xl p-6 -mt-6 flex-grow flex-1 z-10">
        <p className="font-extrabold mt-2 text-2xl leading-10">رکس</p>
        <p className="font-base text-slate-500 leading-10">نر • ۲ ساله</p>
        <div className="flex gap-1 content-center text-slate-700">
          <MapPinIcon className="h-4 w-4" />
          <span className="text-xs">گلسار، خیابان ۱۲۲</span>
        </div>
        <Link
          to="/map"
          className="p-2 bg-white rounded-full flex items-center gap-2 px-3 w-fit mt-3"
        >
          <span className="text-sm">نمایش روی نقشه</span>{" "}
          <MapIcon className="h-5" />
        </Link>
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">گلدن</p>
            <p className="font-thin text-sm">نژاد</p>
          </div>
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">طلایی</p>
            <p className="font-thin text-sm">رنگ</p>
          </div>
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">۲ KG</p>
            <p className="font-thin text-sm">وزن</p>
          </div>
        </div>
        <div className="flex flex-row pt-6 items-center gap-3">
          <img
            className="h-12 bg-white rounded-full"
            src="https://api.dicebear.com/7.x/thumbs/svg"
            alt="avatar"
          />
          <div>
            <p>امیرمحمد فلاح</p>
            <p className="text-xs text-slate-500">۲۴ روز پیش</p>
          </div>
        </div>
        <p className="text-sm mt-3 leading-7 text-justify text-slate-800 mb-24">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده.
        </p>
      </div>
    </div>
  );
}
