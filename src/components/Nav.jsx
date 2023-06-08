import React from "react";
import NavMenuDesktop from "./NavMenuDesktop";

function Nav({
  setMenuMob,
  setMenuIcon,
  menuIcon,
  planetsObj,
  currentId,
  setCurrentId,
}) {
  const cross = menuIcon ? "cross" : "";

  const burgerMenuHandler = () => {
    setMenuIcon((prevState) => !prevState);
    setMenuMob((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="flex desktop:flex-row desktop:py-[1.375em] desktop:px-[2em] justify-between items-center px-[1.5em] py-[1em] tablet:py-[2em] tablet:h-[107px] desktop:h-[85px] border-b border-darkgray tablet:border-none desktop:max-w-[1440px] mx-auto">
        <h1 className="text-white tablet:mx-auto desktop:mx-0 text-[28px] font-ant tracking-[-1] leading-[37px] reg">
          THE PLANETS
        </h1>
        <div
          className={`hamburger-menu ${cross} overflow-hidden`}
          onClick={burgerMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavMenuDesktop
          planetsObj={planetsObj}
          setCurrentId={setCurrentId}
          currentId={currentId}
        />
      </div>
      <hr className="hidden desktop:flex h-[1px] border-darkgray"></hr>
    </nav>
  );
}

export default Nav;
