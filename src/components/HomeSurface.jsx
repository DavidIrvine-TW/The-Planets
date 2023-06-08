import React from "react";
import { Link } from "react-router-dom";
import TabletButtonGroup from "./TabletButtonGroup";


function HomeSurface({ planetsObj, currentId }) {
  const selectedPlanet = planetsObj.find((planet) => planet.id === currentId);
  return (
    <article className="flex flex-col items-center justify-center px-[1.5em] tablet:px-[2em] desktop:px-[0px] desktop:flex-row desktop:gap-[120px] desktop:pt-[7.875em] desktop:mb-[5.4375em]">
      <div className="relative h-[304px] w-[327px] tablet:h-[440px] tablet:w-[690px] desktop:w-[760px] mx-auto flex flex-col items-center justify-center">
        <img
          key={selectedPlanet.id}
          className={`${selectedPlanet.imgstyle} fade-in`}
          src={selectedPlanet.images.planet}
        />
        <img
          className=" w-[70px] h-auto tablet:w-[100px] desktop:w-[163px]  absolute bottom-[20px] desktop:bottom-[-70px]"
          src={selectedPlanet.images.geology}
        />
      </div>

      <div className="tablet:w-[689px] tablet:mx-auto tablet:flex tablet:gap-[69px] desktop:flex-col desktop:w-[350px]">
        <div className="flex text-center tablet:text-left w-[327px] h-[235px] tablet:w-[339px] desktop:w-[350px] tablet:h-[250px] flex-col">
          <h1 className="text-[2.5rem] tablet:text-[3rem] desktop:text-[5em] desktop:leading-[103px] font-ant reg text-white tablet:leading-[64px] leading-[52px] uppercase">
            {selectedPlanet.name}
          </h1>
          <p className="font-spartareg text-white desktop:text-[0.875rem] text-[0.6875rem] leading-[22px] mt-[1em] tablet:mt-[1.5em] text-justify">
            {selectedPlanet.geology.content}
          </p>

          <div className="flex tablet:text items-center text-lightgray gap-[5px] tablet:justify-start justify-center text-[0.75rem] mt-[1.5em] desktop:mb-[2.5em]">
            <p className="font-spartareg">Source :</p>
            <Link
              className="underline font-spartabold"
              to={selectedPlanet.geology.source}
            >
              Wikipedia
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                opacity=".5"
              />
            </svg>
          </div>
        </div>

        <div>
          <TabletButtonGroup planetsObj={planetsObj} currentId={currentId} />
        </div>
      </div>
    </article>
  );
}

export default HomeSurface;
