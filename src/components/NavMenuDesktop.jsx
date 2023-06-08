import React from "react";
import { useState } from "react";

function NavMenuDesktop({ planetsObj, setCurrentId, currentId }) {
  const [buttonActive, setButtonActive] = useState(1);

  const activeButtonhandler = (buttonId) => {
    setButtonActive(buttonId);
  };

  const idHandler = (id) => {
    setCurrentId(id);
    activeButtonhandler(id);
  };

  return (
    <ul className="hidden desktop:flex text-white gap-[2em]">
      {planetsObj.map((planet) => (
        <button
          type="button"
          key={planet.id}
          className={`h-[85px] w-[80px] ${planet.navMenuDesktop} ${
            currentId === planet.id
              ? `${planet.navMenuDesktopActive} `
              : "text-lightgray border-transparent"
          }`}
          onClick={() => idHandler(planet.id)}
        >
          {planet.name}
        </button>
      ))}
    </ul>
  );
}

export default NavMenuDesktop;
