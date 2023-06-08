import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./TabletButtonGroup.module.css";

function TabletButtonGroup({ planetsObj, currentId }) {
  const location = useLocation();
  const [buttonActive, setButtonActive] = useState(1);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/structure") {
      setButtonActive(2);
    } else if (path === "/surface") {
      setButtonActive(3);
    } else {
      setButtonActive(1);
    }
  }, [location]);

  const activeButtonhandler = (buttonId) => {
    setButtonActive(buttonId);
  };

  const selectedPlanet = planetsObj.find(
    (planet) => planet.id === parseInt(currentId)
  );

  return (
    <div className="tabletButtonGroup w-[281px] h-[152px] flex flex-col gap-[0.5rem] mt-[50px] desktop:w-[350px] desktop:h-[176px] desktop:mt-[0]">
      <NavLink to="/">
        <button
          type="button"
          className={`${
            buttonActive === 1
              ? `${selectedPlanet.tabletButtongroup}`
              : "hover:bg-darkgray"
          } px-[1.25em] py-[0.8em] text-white tablet:w-[281px] tracking-[2px] text-[0.5625rem] font-spartabold border border-darkgray text-left desktop:w-full 
          ${classes.button}`}
          onClick={() => activeButtonhandler(1)}
        >
          <span className="text-lightgray mr-[1rem]">01</span>OVERVIEW
        </button>
      </NavLink>

      <NavLink to="/structure">
        <button
          type="button"
          className={`${
            buttonActive === 2
              ? `${selectedPlanet.tabletButtongroup}`
              : "hover:bg-darkgray"
          } px-[1.25em] py-[0.8em] text-white tablet:w-[281px]  tracking-[2px] text-[0.5625rem] font-spartabold border border-darkgray  text-left desktop:w-full 
           ${classes.button}`}
          onClick={() => activeButtonhandler(2)}
        >
          <span className="text-lightgray mr-[1rem]">02</span>STRUCTURE
        </button>
      </NavLink>

      <NavLink to="/surface">
        <button
          type="button"
          className={`${
            buttonActive === 3
              ? `${selectedPlanet.tabletButtongroup}`
              : "hover:bg-darkgray"
          } px-[1.25em] py-[0.8em] text-white tablet:w-[281px]  tracking-[2px] text-[0.5625rem] font-spartabold border border-darkgray  text-left desktop:w-full  ${
            classes.button
          }`}
          onClick={() => activeButtonhandler(3)}
        >
          <span className="text-lightgray mr-[1rem]">03</span>SURFACE
        </button>
      </NavLink>
    </div>
  );
}

export default TabletButtonGroup;
