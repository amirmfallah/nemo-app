import React, { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const MapP = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 145.119064,
          latitude: -37.850128,
          zoom: 14,
        }}
        className="h-screen w-screen"
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={145.119064} latitude={-37.850128} anchor="bottom">
          <div
            className="text-red-500 drop-shadow-xl flex flex-col items-center justify-center gap-4"
            onClick={() => navigate("/explore/detail")}
          >
            <MapPinIcon className="h-12 w-12" />
            <div className="text-md px-2 py-1 rounded-md bg-white">Rex</div>
          </div>
        </Marker>

        <Marker longitude={145.11} latitude={-37.850128} anchor="bottom">
          <div
            className="text-red-500 drop-shadow-xl flex flex-col items-center justify-center gap-4"
            onClick={() => navigate("/explore/detail")}
          >
            <MapPinIcon className="h-12 w-12" />
            <div className="text-md px-2 py-1 rounded-md bg-white">Lenny</div>
          </div>
        </Marker>

        <Marker longitude={145.119064} latitude={-37.86} anchor="bottom">
          <div
            className="text-red-500 drop-shadow-xl flex flex-col items-center justify-center gap-4"
            onClick={() => navigate("/explore/detail")}
          >
            <MapPinIcon className="h-12 w-12" />
            <div className="text-md px-2 py-1 rounded-md bg-white">Pepper</div>
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default MapP;
