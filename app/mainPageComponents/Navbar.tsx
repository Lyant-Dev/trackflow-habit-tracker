import React from "react"; //6.9k (gzipped: 2.7k)
import AppIcon from "../SVG_Icons/AppIcon";

function Navbar() {
  return (
    <header>
      <div className=" p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* Icon + Name of the App */}
            {/* ----------------------- */}
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                {/* The Icon */}
                <div  className="bg-[#04d400] p-2 rounded-md">
                  <AppIcon color="#ffffff" height="34" width="34" />
                  
                </div>
                {/* The Name of the App  */}
                <span
                  className="font-bold text-[#04d400]"
                >
                  track
                </span>
                <span className="font-light"> Flow</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
