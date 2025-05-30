import React from "react";
import { Link } from "react-router-dom";

function SideNav({myNav}) {
  return (
    <div className={`${myNav ? "h-[200px]" : " h-[0px] overflow-hidden"} bg-yellow-400 duration-200 absolute w-[200px] top-[60px] `}>
      <nav className=" ">
        <ol className=" flex flex-col text-center gap-9 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default SideNav