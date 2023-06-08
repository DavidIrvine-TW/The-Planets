import React from "react";

function Footer({ planetsObj, currentId }) {
  const selectedPlanet = planetsObj.find((planet) => planet.id === currentId);

  return (
    <section className="flex flex-col tablet:flex-row gap-[0.5em] tablet:gap-[11px] tablet:mt-[.5em] tablet:w-[689px] desktop:w-[1110px] desktop:mt-[0] tablet:mb-[2.5em] mx-auto">
      <div
        className="tablet:w-[164px] tablet:h-[88px] w-[327px] h-[48px] 
      mx-auto border border-darkgray flex text-center justify-between tablet:text-left tablet:flex-col tablet:justify-start tablet:pt-[1em] tablet:pl-[1em] tablet:pb-[1.2em] tablet:gap-[0.4em]
      px-[1.5em] py-[0.5em] uppercase desktop:w-[255px] desktop:h-[128px] items-center tablet:items-start "
      >
        <h2 className="text-lightgray font-spartabold text-[0.5rem] tracking-[0.75px] leading-[16px] desktop:text-[0.6875rem] desktop:tracking-[1px] desktop:leading-[25px]">
          Rotation Time
        </h2>
        <span className="text-white text-[1.25rem] tablet:text-[1.5rem] tablet:tracking-[.75px] tablet:leading-[32px] font-ant desktop:text-[2.5rem] desktop:tracking-[1px] desktop:leading-[52px]">
          {selectedPlanet.rotation}
        </span>
      </div>

      <div
        className="tablet:w-[164px] tablet:h-[88px] w-[327px] h-[48px] 
      mx-auto border border-darkgray flex text-center justify-between tablet:text-left tablet:flex-col tablet:justify-start tablet:pt-[1em] tablet:pl-[1em] tablet:pb-[1.2em] tablet:gap-[0.4em]
      px-[1.5em] py-[0.5em] uppercase desktop:w-[255px] desktop:h-[128px] items-center tablet:items-start"
      >
        <h3 className="text-lightgray font-spartabold text-[0.5rem] tracking-[0.75px] leading-[16px] desktop:text-[0.6875rem] desktop:tracking-[1px] desktop:leading-[25px]">
          revolution time
        </h3>
        <span className="text-white text-[1.25rem] font-ant tablet:text-[1.5rem] tablet:tracking-[.75px] tablet:leading-[32px] desktop:text-[2.5rem] desktop:tracking-[1px] desktop:leading-[52px]">
          {selectedPlanet.revolution}
        </span>
      </div>

      <div
        className="tablet:w-[164px] tablet:h-[88px] w-[327px] h-[48px] 
      mx-auto border border-darkgray flex text-center justify-between tablet:text-left tablet:flex-col tablet:justify-start tablet:pt-[1em] tablet:pl-[1em] tablet:pb-[1.2em] tablet:gap-[0.4em]
      px-[1.5em] py-[0.5em] uppercase desktop:w-[255px] desktop:h-[128px] items-center tablet:items-start"
      >
        <h4 className="text-lightgray font-spartabold text-[0.5rem] tracking-[0.75px] leading-[16px] desktop:text-[0.6875rem] desktop:tracking-[1px] desktop:leading-[25px]">
          Radius
        </h4>
        <span className="text-white text-[1.25rem] font-ant tablet:text-[1.5rem] tablet:tracking-[.75px] tablet:leading-[32px] desktop:text-[2.5rem] desktop:tracking-[1px] desktop:leading-[52px]">
          {selectedPlanet.radius}
        </span>
      </div>

      <div
        className="tablet:w-[164px] tablet:h-[88px] w-[327px] h-[48px] 
      mx-auto border border-darkgray flex text-center justify-between tablet:text-left tablet:flex-col tablet:justify-start tablet:pt-[1em] tablet:pl-[1em] tablet:pb-[1.2em] tablet:gap-[0.4em]
      px-[1.5em] py-[0.5em] uppercase desktop:w-[255px] desktop:h-[128px] items-center tablet:items-start"
      >
        <h5 className="text-lightgray font-spartabold text-[0.5rem] tracking-[0.75px] leading-[16px] desktop:text-[0.6875rem] desktop:tracking-[1px] desktop:leading-[25px]">
          average temp.
        </h5>
        <span className="text-white text-[1.25rem] font-ant tablet:text-[1.5rem] tablet:tracking-[.75px] tablet:leading-[32px] desktop:text-[2.5rem] desktop:tracking-[1px] desktop:leading-[52px]">
          {selectedPlanet.temperature}
        </span>
      </div>
    </section>
  );
}

export default Footer;
