import React from "react";
import NemoIcon from "../../icon.svg";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import ListItem from "../components/ListItem";

export default function List() {
  return (
    <div className="px-6 pb-6">
      <div className="sticky top-0 bg-white py-6 border-b">
        <div className="flex items-center gap-2 py-3">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <p className="font-thin text-lg">Search</p>
        </div>

        <div role="tablist" className="tabs tabs-boxed mt-6 tabs-md">
          <a role="tab" className="tab">
            Found
          </a>
          <a role="tab" className="tab tab-active">
            Lost
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-h-full overflow-hidden pb-24 mt-5">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
