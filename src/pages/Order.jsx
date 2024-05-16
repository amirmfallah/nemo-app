import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/solid";

export default function Order() {
  return (
    <div className="p-6">
      <div className="grid col-span-full gap-2">
        <div className="flex items-center gap-2 pt-3">
          <FaceSmileIcon className="w-8 h-8" />
          <p className="font-bold text-3xl">New Pet</p>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is your pet's name?</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What breed is your pet?</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What old is your pet?</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">
              List any alergies or health issues
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder=""
          ></textarea>
        </label>

        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Photos
        </label>
        <p className="text-xs text-slate-600">
          Having a photo and helping people find your lost pet.
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
                <span>Upload photos</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10 MB
            </p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-md flex flex-col items-center justify-center p-2 gap-2 mb-24">
          <p className="text-sm py-2">Checkout</p>
        </div>
      </div>
    </div>
  );
}
