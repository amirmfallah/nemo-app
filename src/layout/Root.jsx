import React from "react";
import { Link, Outlet, useMatch, useMatches } from "react-router-dom";
import {
  GlobeAsiaAustraliaIcon,
  HomeIcon,
  MapIcon,
  NewspaperIcon,
  PlusCircleIcon,
  UserIcon,
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
    label: "گزارش",
    key: "/report",
  },
  {
    icon: () => <NewspaperIcon className="h-6 w-6 " />,
    label: "آگهی‌ من",
  },
  {
    icon: () => <UserIcon className="h-6 w-6 " />,
    label: "حساب من",
    key: "/profile",
  },
];

export default function Root() {
  const matches = useMatches();

  return (
    <div className="h-screen w-full relative flex flex-col overflow-scroll">
      <div className="flex-1 max-h-full">
        <Outlet />
      </div>
      <div className=" btm-nav px-6 btm-nav-lg pb-6 rounded-t-3xl bg-slate-100 ">
        {navigation.map((item) => (
          <Link
            to={item.key}
            key={item.label}
            className={
              "no-select flex-1 flex flex-col items-center text-gray-700  ease-in-out duration-200 transition-all" +
              (matches[1].pathname == item.key
                ? " border-orange-600 border-t-2 text-orange-600"
                : "")
            }
          >
            {item.icon()}
            <span className="text-xs font-light">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// <div className="btm-nav">
//   <button>
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//   </button>
//   <button className="active">
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//   </button>
//   <button>
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
//   </button>
// </div>
