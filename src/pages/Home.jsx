import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="p-6 flex flex-col">
      {!!isLoggedIn && (
        <div className="flex items-center gap-2 py-4">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src="https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51&square=true" />
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Welcome Back!</p>
            <p>John Doe</p>
          </div>
          <div className="flex-1 flex-grow-1"></div>
          <button className="btn btn-square">
            <BellAlertIcon className="w-6" />
          </button>
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex items-center gap-2 py-4">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src="https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51&square=true" />
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-sm">خوش ‌آمدید</p>
            <p>برای تجربه بهتر، وارد شوید!</p>
          </div>
          <div className="flex-1 flex-grow-1"></div>
          <Link to="/auth/login" className="btn btn-square">
            <ArrowLeftOnRectangleIcon className="w-6" />
          </Link>
        </div>
      )}

      <div role="alert" className="alert alert-warning flex flex-role">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="text-right">
          <p>Add your pet to your profile now!</p>
          <p className="text-gray-600 flex items-center font-thin">
            Learn More <ChevronRightIcon className="h-4" />
          </p>
        </div>
      </div>

      <img
        src="/images/nemo_ad.jpg"
        alt=""
        srcset=""
        className="rounded-xl mt-4"
      />

      <h1 className="font-bold pt-6">Lost and Found</h1>
      <div className="flex max-w-full overflow-x-scroll no-scrollbar gap-3 pt-4">
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
        <div className="carousel-item w-1/3">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
