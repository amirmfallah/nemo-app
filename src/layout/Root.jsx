import React from "react";
import { Link, Outlet, useMatch, useMatches } from "react-router-dom";
import {
  GlobeAsiaAustraliaIcon,
  HomeIcon,
  MapIcon,
  NewspaperIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    icon: () => <HomeIcon className="h-6 w-6 " />,
    label: "خونه",
    key: "/home",
  },
  {
    icon: () => <GlobeAsiaAustraliaIcon className="h-6 w-6 " />,
    label: "گمشده",
    key: "/map",
  },
  {
    icon: () => <PlusCircleIcon className="h-6 w-6 " />,
    label: "گزارش جدید",
    key: "/report",
  },
  {
    icon: () => <NewspaperIcon className="h-6 w-6 " />,
    label: "آگهی‌ من",
  },
];

export default function Root() {
  const matches = useMatches();

  return (
    <div className="h-screen w-full relative flex flex-col overflow-scroll">
      <div className="flex-1 max-h-full">
        <Outlet />
      </div>
      <div className="fixed w-full bottom-navbar py-3 px-6 z-50">
        <div className="bg-white rounded-2xl flex flex-row justify-center p-1 drop-shadow-xl border">
          {navigation.map((item) => (
            <Link
              to={item.key}
              key={item.label}
              className={
                "no-select flex-1 flex flex-col items-center text-gray-700 gap-1 py-2 rounded-2xl ease-in-out duration-200 transition-all" +
                (matches[1].pathname == item.key
                  ? " bg-orange-600 text-white"
                  : "")
              }
            >
              {item.icon()}
              <span className="text-xs font-light">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
