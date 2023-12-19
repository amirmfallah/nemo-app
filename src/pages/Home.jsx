import React from "react";
import NemoIcon from "../../icon.svg";
import { MapPinIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="p-6">
      <div className="sticky top-0 bg-white pb-6">
        <div className="flex items-center gap-5 ">
          <img src={NemoIcon} className="h-10" />
          <p className="font-bold">جست‌و‌جوی حیوان گمشده</p>
        </div>
        <div className="flex gap-3 pt-6">
          <div className="rounded-md bg-slate-700 text-white py-1 px-3 font-thin">
            گمشده
          </div>
          <div className="rounded-md border border-slate-700 text-slate-700 py-1 px-3">
            پیدا‌شده
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-6 max-h-full overflow-hidden pb-24">
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-slate-100 rounded-md">
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </div>
      </div>
    </div>
  );
}
