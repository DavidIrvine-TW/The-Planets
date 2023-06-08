import React from "react";
import { useState } from "react";

function NavMenuTablet({ planetsObj, setCurrentId, currentId }) {
  const [buttonActive, setButtonActive] = useState(1);

  const activeButtonhandler = (buttonId) => {
    setButtonActive(buttonId);
  };

  const idHandler = (id) => {
    setCurrentId(id);
    activeButtonhandler(id);
  };

  return (
    <div className="navMenuTablet w-full mx-auto list-container desktop:hidden ">
      <ul className="flex items-center justify-around border-b border-darkgray">
        {planetsObj.map((planet) => (
          <button
            type="button"
            key={planet.id}
            className={`${planet.navMenuTablet} ${
              currentId === planet.id
                ? `${planet.navMenuTabletActive} `
                : "text-lightgray border-transparent"
            }`}
            onClick={() => idHandler(planet.id)}
          >
            {planet.name}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default NavMenuTablet;
