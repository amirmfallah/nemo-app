import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

export default function Report() {
  return (
    <div className="p-6">
      <div className="grid col-span-full gap-2">
        <div className="flex items-center gap-2 pt-3">
          <FaceFrownIcon className="w-8 h-8" />
          <p className="font-bold text-3xl">Report Lost</p>
        </div>

        <label
          htmlFor="map"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Select
        </label>
        <p className="text-xs text-slate-600">
          Select the pet you want to report as lost.
        </p>
        <div className="bg-slate-100 rounded-lg p-4 divide-neutral-800 flex flex-col gap-4 border border-green-300">
          <div className="flex gap-4 items-center">
            <img
              src="/assets/img.jpg"
              className="w-10 h-10 rounded-md object-cover"
            />
            <p>Rex</p>
            <div className="flex-1"></div>
          </div>
        </div>
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
        <label
          htmlFor="map"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last seen
        </label>
        <p className="text-xs text-slate-600">
          Help people find your lost pet by providing the last known location.
        </p>
        <div className="rounded-md overflow-hidden">
          <Map
            id="map"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            initialViewState={{
              longitude: 145.119064,
              latitude: -37.850128,
              zoom: 14,
            }}
            style={{ width: "100%", height: "300px" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          ></Map>
        </div>
        <div className="bg-slate-200 rounded-md flex flex-col items-center justify-center p-2 gap-2 mb-24">
          <p className="text-sm py-2">Report as Lost</p>
        </div>
      </div>
    </div>
  );
}
