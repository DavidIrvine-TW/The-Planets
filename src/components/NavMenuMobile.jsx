import React from "react";

function NavMenuMobile({
  planetsObj,
  menuMob,
  setMenuMob,
  setCurrentId,
  setMenuIcon,
}) {
  const visibleMenu = menuMob ? "" : "hidden";
  const cssAnimation = menuMob ? "show" : "reverse";

  const idHandler = (id) => {
    setCurrentId(id);
    setMenuMob((prevState) => !prevState);
    setMenuIcon((prevState) => !prevState);
  };

  return (
    <div
      className={`nav-menu list-container w-screen h-screen bg-darkblue ${visibleMenu} px-[1.5em] `}
    >
      <ul className={`list ${cssAnimation}`}>
        <li className="h-[1.5em]"></li>
        {planetsObj.map((planet, index) => (
          <li key={index} className="list-item border-b border-darkgray">
            <div className=" h-[25px] w-full flex justify-between my-[20px] items-center">
              <div className="flex items-center gap-[1.5em]  ">
                <div
                  className={`${planet.classdiv} w-[20px] h-[20px] rounded-full`}
                />
                <button
                  type="button"
                  key={planet.id}
                  className="text-left text-white uppercase text-[0.9375rem] tracking-[1.4px] leading-[25px] font-spartabold bold"
                  onClick={() => idHandler(planet.id)}
                >
                  {planet.name}
                </button>
              </div>
              <span className="pr-[0.5em]">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </span>
            </div>
          </li>
        ))}
        <li className="h-full"></li>
      </ul>
    </div>
  );
}

export default NavMenuMobile;
