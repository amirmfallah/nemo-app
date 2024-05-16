import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  ChevronLeftIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/solid";
import PetIcon from "../../assets/pet.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 pt-3">
        <Cog6ToothIcon className="w-8 h-8" />
        <p className="font-bold text-3xl">Profile</p>
      </div>
      <div className="flex items-center gap-4 py-4 bg-slate-200 p-4 rounded-xl">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51&square=true" />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between gap-2">
          <p className="text-lg font-bold">John Doe</p>
          <p>john.doe@gmail.com</p>
        </div>
      </div>

      <div className="bg-slate-200 rounded-lg p-4 divide-neutral-800 flex flex-col gap-4 ">
        <div className="flex gap-4 items-center">
          <img
            src="/assets/img.jpg"
            className="w-10 h-10 rounded-md object-cover"
          />
          <p>Rex</p>
          <div className="flex-1"></div>
          <button>
            <TrashIcon className="w-6" />
          </button>{" "}
          <button>
            <PencilIcon className="w-6" />
          </button>{" "}
        </div>

        <div
          className="flex gap-4 items-center"
          onClick={() => navigate("/profile/order")}
        >
          <div className="bg-orange-300 rounded-md p-2">
            <img src={PetIcon} className="w-6 h-6" />
          </div>
          <p>Order new Nemo colar</p>
          <div className="flex-1"></div>
          <button>
            <PlusIcon className="w-6" />
          </button>{" "}
        </div>
      </div>

      <div className="bg-slate-200 rounded-lg p-4 divide-neutral-800 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="bg-orange-300 rounded-md p-2">
            <UserIcon className="w-6 h-6" />
          </div>
          <p>Edit profile information</p>
          <div className="flex-1"></div>
          <button>
            <ChevronLeftIcon className="w-6" />
          </button>{" "}
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-orange-300 rounded-md p-2">
            <UserIcon className="w-6 h-6" />
          </div>
          <p>Support</p>
          <div className="flex-1"></div>
          <button>
            <ChevronLeftIcon className="w-6" />
          </button>{" "}
        </div>
      </div>

      <div className="bg-slate-200 rounded-lg p-4 divide-neutral-800 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="bg-orange-300 rounded-md p-2">
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
          </div>
          <p>Logout</p>
          <div className="flex-1"></div>
          <button>
            <ChevronLeftIcon className="w-6" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
