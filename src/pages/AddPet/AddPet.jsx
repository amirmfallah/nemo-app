import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useMatches } from "react-router-dom";

export default function AddPet() {
  const matches = useMatches();
  const currentStep = parseInt(matches[1].params.step);
  const totalSteps = 7;

  return (
    <div className="relative h-screen w-full z-50 bg-white">
      <div className="flex items-center justify-between p-6">
        <div className="flex-1">
          گام {currentStep} از {totalSteps}
        </div>
        <progress
          className="progress progress-accent h-4 flex-1"
          value={currentStep}
          max={totalSteps}
        ></progress>
        <div className="flex flex-1 justify-end">
          <div className="btn btn-sm btn-circle">
            <XMarkIcon className="h-3" />
          </div>
        </div>
      </div>

      <div>
        <input type="radio" id="huey" name="drone" value="huey" checked>
          <div>hello</div>
        </input>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="dewey" />
      </div>

      <div className="flex gap-3 fixed bottom-0 w-full p-6">
        <Link
          to={`/boarding/${currentStep - 1}`}
          className={"btn " + (currentStep == 1 ? "hidden" : "")}
        >
          <ChevronRightIcon className="h-6" />
        </Link>
        <Link
          to={`/boarding/${Math.min(totalSteps, currentStep + 1)}`}
          className="btn btn-primary text-white flex-1 text-lg"
        >
          ادامه
        </Link>
      </div>
    </div>
  );
}
