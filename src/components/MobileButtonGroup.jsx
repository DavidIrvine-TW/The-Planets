import { Link } from "react-router-dom";
import { useState } from "react";

function MobileButtonGroup({ planetsObj, currentId }) {
  const [buttonActive, setButtonActive] = useState(1);
  const activeButtonhandler = (buttonId) => {
    setButtonActive(buttonId);
  };

  const selectedPlanet = planetsObj.find(
    (planet) => planet.id === parseInt(currentId)
  );

  return (
    <div className="tablet:hidden relative w-full h-[50px]">
      <div className="absolute tablet:block top-0 left-0 border-b border-darkgray w-full h-full flex justify-evenly">
        <Link to="/">
          <button
            className={`${selectedPlanet.mobileButtonGroup} ${
              buttonActive === 1
                ? `${selectedPlanet.mobileButtonGroupActive}`
                : "border-transparent"
            }`}
            onClick={() => activeButtonhandler(1)}
          >
            OVERVIEW
          </button>
        </Link>

        <Link to="/structure">
          <button
            className={`${selectedPlanet.mobileButtonGroup} ${
              buttonActive === 2
                ? `${selectedPlanet.mobileButtonGroupActive}`
                : "border-transparent"
            } `}
            onClick={() => activeButtonhandler(2)}
          >
            STRUCTURE
          </button>
        </Link>

        <Link to="/surface">
          <button
            className={`${selectedPlanet.mobileButtonGroup} ${
              buttonActive === 3
                ? `${selectedPlanet.mobileButtonGroupActive}`
                : "border-transparent"
            }`}
            onClick={() => activeButtonhandler(3)}
          >
            SURFACE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MobileButtonGroup;
