import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const DynamicMap = dynamic((data) => import("../components/Map"), {
  ssr: false,
});

const GET_CHARGE_POINT_NEARBY = gql`
  query GetChargePointsNearby(
    $location: NewLocation!
    $page: Int!
    $skip: Int!
    $maxDistance: Float!
  ) {
    chargePointsNearby(
      location: $location
      page: $page
      skip: $skip
      maxDistance: $maxDistance
    ) {
      name
      physicalAddress
      clientId
      location {
        coordinates
      }
    }
  }
`;

const Dashboard = () => {
  const [distance, setDistance] = useState("");
  const [chargePointsNearby, setChargePointsNearby] = useState([]);
  const [getNearbyCharingPoints, { loading, error, data }] = useLazyQuery(
    GET_CHARGE_POINT_NEARBY
  );

  useEffect(() => {
    findNearbyCharger();
  }, []);

  const findNearbyCharger = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        getNearbyCharingPoints({
          variables: {
            location: {
              type: "Point",
              coordinates: [
                location.coords.longitude,
                location.coords.latitude,
              ],
            },
            page: 0,
            skip: 0,
            maxDistance: distance >= 0 ? distance : 1000,
          },
        });
      });
      console.log(data);
      // setChargePointsNearby(data?.chargePointsNearby);
      setChargePointsNearby(data ? data.chargePointsNearby : []);
    }
  };
  return (
    <div className="pb-5">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex w-[85%] rounded-lg overflow-hidden justify-center">
          <DynamicMap data={chargePointsNearby} />
          <div className="flex flex-col mt-3 bg-[#1D1D1D] p-5 absolute rounded-3xl justify-center m-auto flex z-[1000] w-[65%] -bottom-[3rem]">
            <div className="text-4xl text-white font-bold mb-5 text-center">
              Find a nearby station ⛽
            </div>
            <div className="flex justify-center items-center">
              <Input
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="Enter a desire distance you hope to see your nearby chargers (meter as unit)"
                w={"70%"}
                alignSelf="center"
                color="white"
              />
              <div
                onClick={() => findNearbyCharger()}
                className="text-white text-lg bg-[#4caf50] px-5 py-1 ml-2 rounded-lg cursor-pointer font-bold hover:opacity-90 transition"
              >
                Find
              </div>
            </div>
            {/* <input
                className="self-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[70%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
                id="inline-full-name"
                type="text"
              // value={stakeAmount}
              // onChange={(e) => setStakeAmount(e.target.value)}
              /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center text-white mt-14">
        <div className="w-[80%] flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[45%]">
            <div className="mt-5 text-3xl font-semibold">Booking History</div>
            {/* loop render history and ongoing book */}
            <div className="mt-3 bg-[#1D1D1D] p-5 rounded-lg">
              <div className="text-xl font-semibold">Upcoming 27 May</div>
              <div>
                <div className="relative mt-4 flex items-center">
                  <div className="ml-4 before:content-[''] before:w-[4px] before:h-full before:bg-green-400 before:absolute before:left-0 before:rounded-full">
                    <div className="font-semibold text-lg">Station XXX</div>
                    <div className="text-sm text-gray-40">Price ...</div>
                  </div>
                  <div className="ml-6 bg-[#4caf50] rounded-full p-6 py-1">
                    activate
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-4 flex items-center">
                  <div className="ml-4 before:content-[''] before:w-[4px] before:h-full before:bg-pink-700 before:absolute before:left-0 before:rounded-full">
                    <div className="font-semibold text-lg">Station XXX</div>
                    <div className="text-sm text-gray-40">Price ...</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-4 flex items-center">
                  <div className="ml-4 before:content-[''] before:w-[4px] before:h-full before:bg-pink-700 before:absolute before:left-0 before:rounded-full">
                    <div className="font-semibold text-lg">Station XXX</div>
                    <div className="text-sm text-gray-40">Price ...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full md:w-[50%]">
            <div className="text-3xl font-semibold">Provider</div>
            <div className="mt-3 bg-[#1D1D1D] p-5 rounded-lg">
              <div className="flex justify-between items-center bg-[#4caf50] rounded-lg py-3 px-5">
                <div>
                  <div className="text-gray-300 text-sm">total hours book</div>
                  <div className="text-3xl font-semibold">22Hours</div>
                </div>
                <img src="/static/priceProvider.png" />
              </div>
              <div className="mt-3">
                <div className="text-gray-200">Your stations</div>
                {/* loop your stations here */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/static/locationCharger.png" alt="" />
                    <div>
                      <div>Station XXX</div>
                    </div>
                  </div>
                  <div>+154.50</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/static/locationCharger.png" alt="" />
                    <div>
                      <div>Station XXX</div>
                    </div>
                  </div>
                  <div>+154.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
