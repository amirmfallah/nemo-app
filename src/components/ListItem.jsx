import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function ListItem() {
  return (
    <Link className="flex flex-col rounded-md" to={"/home/detail"}>
      <img src="/assets/img.jpg" alt="" className="rounded-md w-full" />
      <p className="font-extrabold mt-2">رکس</p>
      <p className="font-base text-sm text-slate-500">نر • ۲ ساله</p>
      <div className="flex gap-1 content-center text-slate-700 mt-3">
        <MapPinIcon className="h-4 w-4" />
        <span className="text-xs">گلسار، خیابان ۱۲۲</span>
      </div>
    </Link>
  );
}
