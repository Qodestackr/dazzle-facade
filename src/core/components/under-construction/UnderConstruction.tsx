import { FaTools } from "react-icons/fa";

import { useLocation } from "react-router-dom";

export function UnderConstruction() {
  // useDocumentTitle("Under Construction");

  const currentLocation = useLocation();
  const pageName = currentLocation?.pathname.slice(1);

  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl font-extrabold">
      <FaTools className="text-gray-300 w-24 h-24" />

      <div className="flex flex-col justify-between items-center ml-4">
        <h3 className="text-gray-300">Coming Soon</h3>
        <h3 className="text-slate-600">
          *{pageName} Page is Under Construction
        </h3>
      </div>
    </div>
  );
}

UnderConstruction.displaName = "@UnderConstruction";
