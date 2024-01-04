import React, { useState } from "react";
import Map from "../pages/Map";
import {
  Bars3Icon,
  MapIcon,
  ListBulletIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import List from "../pages/List";

export default function Explore() {
  const [toggleMap, setToggleMap] = useState(true);

  return (
    <div className="h-full w-full relative">
      <button
        className="btn btn-accent fixed left-6 top-6 z-50 text-white"
        onClick={() => setToggleMap(!toggleMap)}
      >
        {!toggleMap && (
          <span className="flex flex-col items-center">
            <MapPinIcon className="h-5 w-5" />
            <span className="font-thin text-xs">نقشه</span>
          </span>
        )}
        {!!toggleMap && (
          <span className="flex flex-col items-center">
            <ListBulletIcon className="h-6 w-6" />
            <span className="font-thin text-xs">لیست</span>
          </span>
        )}
      </button>
      {!!toggleMap && <Map />}
      {!toggleMap && <List />}
    </div>
  );
}
