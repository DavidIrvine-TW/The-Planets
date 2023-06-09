import React from "react";
import MobileButtonGroup from "./MobileButtonGroup";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import HomeSurface from "./HomeSurface";
import HomeStructure from "./HomeStructure";


function PlanetPage({ planetsObj, currentId, setCurrentId }) {
  return (
    <article className="desktop:w-[1110px] desktop:h-auto mx-auto  pb-[2em]">
      <MobileButtonGroup
        planetsObj={planetsObj}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              planetsObj={planetsObj}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          }
        />
        <Route
          path="/structure"
          element={
            <HomeStructure planetsObj={planetsObj} currentId={currentId} />
          }
        />
        <Route
          path="/surface"
          element={
            <HomeSurface planetsObj={planetsObj} currentId={currentId} />
          }
        />
      </Routes>
      <Footer planetsObj={planetsObj} currentId={currentId} />
    </article>
  );
}

export default PlanetPage;
