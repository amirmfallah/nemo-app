import React from "react";
import { ChevronLeftIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full relative">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/assets/img.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/assets/img.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <Link to={"/explore"} className="fixed left-0 top-0  ">
        <div className="p-2 bg-white rounded-full m-3">
          <ChevronLeftIcon className="h-5" />
        </div>
      </Link>

      <div className="bg-slate-200 rounded-t-3xl p-6 -mt-6 flex-grow flex-1 z-10">
        <div className="flex flex-row justify-between items-center">
          <p className="font-extrabold mt-2 text-2xl leading-10">Rex</p>
        </div>
        <p className="font-base text-slate-500 leading-10">
          Male • 2 Years old
        </p>
        <div className="flex gap-1 content-center text-slate-700">
          <MapPinIcon className="h-4 w-4" />
          <span className="text-xs">Burwood, Victoria</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">Poodle</p>
            <p className="font-thin text-sm">Breed</p>
          </div>
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">Golden</p>
            <p className="font-thin text-sm">Color</p>
          </div>
          <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2">
            <p className="text-lg font-bold">2 KG</p>
            <p className="font-thin text-sm">Weight</p>
          </div>
        </div>
        <div className="flex flex-row pt-6 items-center gap-3">
          <img
            className="h-12 bg-white rounded-full"
            src="https://api.dicebear.com/7.x/thumbs/svg"
            alt="avatar"
          />
          <div>
            <p>John Doe</p>
            <p className="text-xs text-slate-500">6 Hours ago</p>
          </div>
        </div>
        <p className="text-sm mt-3 leading-7 text-justify text-slate-800 mb-8">
          لLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt
        </p>
        <div
          className="bg-white rounded-md flex flex-col items-center justify-center p-2 gap-2 mb-24"
          onClick={() => navigate("/chat")}
        >
          <p className="text-sm py-2">Chat with owner</p>
        </div>
      </div>
    </div>
  );
}
