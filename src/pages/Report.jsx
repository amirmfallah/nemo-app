import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Report() {
  return (
    <div className="p-6">
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          تصویر حیوان خانگی
        </label>
        <p className="text-xs text-slate-600">
          عکس حیوان به پیدا شدن آن کمک می‌کند.
        </p>
        <div className="mt-2 flex justify-center content-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600 items-center justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>آپلود تصویر</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF تا سقف ۱۰ مگابایت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
