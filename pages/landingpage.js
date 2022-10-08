import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import NavbarLandingPage from "../components/NavbarLandingPage";
const DynamicMap = dynamic((data) => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-[#212121] p-5 flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Eth Bogota JomEV (JEV)</title>
      </Head>
      <NavbarLandingPage />
      <h1 className="mt-6 text-white text-center text-5xl md:text-6xl font-bold text-[#4caf50]">
        Eth Bogota JomEV (JEV)
      </h1>
      <div className="mt-3 w-[90%]">
        <DynamicMap />
        <div className="mt-2 text-center text-lg text-white flex items-center justify-center">
          Click on the map to locate where you are!{" "}
          <FaSearchLocation className="ml-1 text-xl" />
        </div>
      </div>
      <div className="mt-3 md:mt-10 w-full md:w-[50%] md:ml-10 flex flex-col md:flex-row justify-between items-center">
        <h2 className=" text-white text-xl md:text-2xl text-center mt-3 text-gray-300 align-middle">
          A decentralized market for EV Charging Stations, providing a better
          experience for EV owners
        </h2>
        <img src="/static/robot.png" className="w-[20%] align-middle" />
        <div>
          <div>
            <div className="flex justify-between">
              {" "}
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col md:flex-row flex-wrap">
        <div className="my-2 md:my-0 md:mx-2 w-[250px] h-[100px] bg-blue-300 rounded p-2">
          Sponsor
        </div>
        <div className="my-2 md:my-0 md:mx-2 w-[250px] h-[100px] bg-blue-300 rounded p-2">
          Sponsor
        </div>
        <div className="my-2 md:my-0 md:mx-2 w-[250px] h-[100px] bg-blue-300 rounded p-2">
          Sponsor
        </div>
      </div>
    </div>
  );
}
