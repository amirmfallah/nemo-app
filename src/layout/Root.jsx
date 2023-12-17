import React from "react";
import { Outlet } from "react-router-dom";
import { HomeIcon, MapIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export default function Root() {
  return (
    <div className="h-full w-full relative">
      <Outlet />
      <div className="fixed w-full bottom-0 py-3 px-6">
        <div className=" bg-white rounded-2xl flex flex-row justify-center p-1">
          <div className="flex-1 flex flex-col items-center text-gray-700 gap-1 py-2">
            <HomeIcon className="h-6 w-6 " />
            <span className="text-sm font-light">خونه</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-gray-700 gap-1  py-2">
            <NewspaperIcon className="h-6 w-6" />
            <span className="text-sm font-light">گزارش جدید</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-gray-700 gap-1 py-2 bg-orange-600 text-white rounded-2xl">
            <MapIcon className="h-6 w-6" />
            <span className="text-sm font-light">نقشه</span>
          </div>
        </div>
      </div>
    </div>
  );
}
