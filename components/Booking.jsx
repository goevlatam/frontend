import Head from "next/head";
import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    spec: "100w",
    rate: "99%",
  },
  {
    id: 2,
    spec: "77w",
    rate: "98%",
  },
  {
    id: 3,
    spec: "66w",
    rate: "97%",
  },
];

const Booking = () => {
  const [selectedCharge, setSelectedCharger] = useState();
  const [selectedBookingTime, setSelectedBookingTime] = useState();
  return (
    <div className="mt-10 pb-10 w-full flex justify-center">
      <Head>
        <title>Booking</title>
      </Head>
      <div className="text-white w-[80%]">
        <div>
          <h2 className="text-4xl font-bold">Booking</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[60%] mt-5 bg-[#1D1D1D] p-4 rounded-lg">
            <div className="bg-[#4caf50] rounded-lg py-2 px-5 flex items-center justify-between">
              <div>
                <div className="text-sm mb-2">price</div>
                <div className="font-bold text-3xl">$25,125</div>
              </div>
              <div>
                <img src="/static/price.png" alt="" />
              </div>
            </div>
            <div className="ml-3 mt-5 flex items-center">
              <img
                src="/static/locationCharger.png"
                alt=""
                className="w-[40px]"
              />
              <div className="ml-2">
                <div className="font-semibold text-xl">Location</div>
                <p className="text-gray-300">Address</p>
              </div>
            </div>
            <div className="ml-3 mt-5 flex items-center">
              <img src="/static/specs.png" alt="" className="w-[40px]" />
              <div className="ml-2">
                <div className="font-semibold text-xl">Charger Specs</div>
                <p className="text-gray-300">
                  {selectedCharge
                    ? selectedCharge.spec
                    : "Select a charger, here will show the spec"}
                </p>
              </div>
            </div>
            <div className="ml-3 mt-5 flex items-center">
              <img src="/static/rate.png" alt="" className="w-[40px]" />
              <div className="ml-2">
                <div className="font-semibold text-xl">Charger Rate</div>
                <p className="text-gray-300">
                  {" "}
                  {selectedCharge
                    ? selectedCharge.rate
                    : "Select a charger, here will show the rate"}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[400px] mt-5 overflow-y-auto w-full md:w-[30%] bg-[#1D1D1D] p-3 rounded-lg">
            <h3 className="font-bold text-2xl">Upcoming booking</h3>
            <div className="mt-5">
              <div>
                <div className="text-lg font-semibold">Address1</div>
                <div>Date of that user booking</div>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <div className="text-lg font-semibold">Address1</div>
                <div>Date of that user booking</div>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <div className="text-lg font-semibold">Address1</div>
                <div>Date of that user booking</div>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <div className="text-lg font-semibold">Address1</div>
                <div>Date of that user booking</div>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <div className="text-lg font-semibold">Address1</div>
                <div>Date of that user booking</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row items-center">
            <h3 className="font-bold text-2xl">Available Slot</h3>
            <div className="text-lg text-gray-400 ml-5">select book time</div>
            <input
              onChange={(e) => setSelectedBookingTime(e.timeStamp)}
              type="datetime-local"
              name=""
              id=""
              className="text-black ml-2 form-control border border-[#479C4C] block px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-[#4caf50] rounded transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-6">
            {dummyData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedCharger(item)}
                  className={`hover:cursor-pointer flex justify-between items-center bg-[#1D1D1D] py-2 px-3 rounded-lg ${
                    selectedCharge?.id == item.id
                      ? "border border-[#4caf50]"
                      : ""
                  }`}
                >
                  <img src="/static/charger.png" alt="" className="w-[40px]" />
                  <div className="mx-1">
                    <div>Charger {index}</div>
                  </div>
                  <div className="mx-1 flex items-center justify-end">
                    <img src="/static/line.png" alt="" className="w-[40px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center md:block">
          <div className="text-lg font-semibold mt-14 bg-[#4caf50] w-fit rounded-lg py-2 px-8 hover:scale-105 transition cursor-pointer">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
