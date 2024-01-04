import React from "react";
import NemoIcon from "../../icon.svg";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="px-6 pb-6">
      <div className="sticky top-0 bg-white py-6 border-b">
        <div className="flex items-center gap-2 py-3">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <p className="font-thin text-lg">جست‌و‌جوی حیوان گمشده</p>
        </div>

        <div role="tablist" className="tabs tabs-boxed mt-6 tabs-md">
          <a role="tab" className="tab">
            گمشده
          </a>
          <a role="tab" className="tab tab-active">
            پیدا‌شده
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-h-full overflow-hidden pb-24 mt-5">
        <Link
          className="flex flex-col p-3 bg-slate-100 rounded-md"
          to={"/home/detail"}
        >
          <img src="/assets/img.jpg" alt="" className="rounded-md" />
          <p className="font-extrabold mt-2">رکس</p>
          <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
          <div className="flex gap-1 content-center text-slate-700 mt-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-xs">گلسار، خیابان ۱۲۲</span>
          </div>
        </Link>
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
