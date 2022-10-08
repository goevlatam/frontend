import { ethers } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ChargingStationRegisterPopUpModel from "./ChargingStationRegisterPopUpModel";
const RegisterChargingStationForm = () => {
  const interval = 400;
  let typingTimer;
  const [isSubmit, setIsSubmit] = useState(false);

  const [stationName, setStationName] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [stationWallet, setStationWallet] = useState("");
  const [numberOfConnectors, setNumberOfConnectors] = useState(1);
  const [chargeRate, setChargeRate] = useState(0);
  const [currencySelected, setCurrencySelected] = useState("jev");
  const [stakeAmountFetched, setStakeAmountFetched] = useState(0);
  const [isStationNameValid, setIsStationNameValid] = useState(true);
  const [isLongitudeValid, setIsLongitudeValid] = useState(true);
  const [isLatitudeValid, setIsLatitudeValid] = useState(true);
  const [isStationWalletValid, setIsStationWalletValid] = useState(true);

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const captchaRef = useRef(null);

  // the function handling the click event of the submit
  // button under the recaptcha
  const handleSubmit = () => {
    const stationNameReg = /^[0-9a-zA-Z\s]+$/;
    if (!stationNameReg.test(stationName)) {
      setIsStationNameValid(false);
    } else {
      setIsStationNameValid(true);
    }
    if (longitude < -180 || longitude > 180) {
      setIsLongitudeValid(false);
    } else {
      setIsLongitudeValid(true);
    }
    if (latitude < -90 || latitude > 90) {
      setIsLatitudeValid(false);
    } else {
      setIsLatitudeValid(true);
    }
    if (!ethers.utils.isAddress(stationWallet)) {
      setIsStationWalletValid(false);
    } else {
      setIsStationWalletValid(true);
    }
    if (
      isStationNameValid &&
      isLongitudeValid &&
      isLatitudeValid &&
      isStationWalletValid
    ) {
      setIsSubmit(true);
      captchaRef.current.reset();
      setRecaptchaToken("");
    }
  };

  const handleKeyUp = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      // request needed stake amount
      // setStakeAmountFetched()
      if (currencySelected == "jev") {
      } else {
      }
      // setStakeAmountFetched()
    }, interval);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center text-3xl text-white font-bold mb-8 ">
        Register Charging Station
      </h3>
      <form className="w-full max-w-sm ">
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Station Name
            </label>
          </div>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-full-name"
              type="text"
              placeholder="Station Name"
              value={stationName}
              onChange={(e) => setStationName(e.target.value)}
            />
          </div>
          {!isStationNameValid && (
            <div className="text-red-400">
              Station name should not contain symbols!
            </div>
          )}
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-longitude"
            >
              Longitude
            </label>
          </div>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-longitude"
              type="number"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          {!isLongitudeValid && (
            <div className="text-red-400">-180 to 180 for longitude!</div>
          )}
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-latitude"
            >
              Latitude
            </label>
          </div>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-latitude"
              type="number"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          {!isLatitudeValid && (
            <div className="text-red-400">-90 to 90 for latitude!</div>
          )}
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-station-wallet"
            >
              Station Wallet
            </label>
          </div>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-full-name"
              type="text"
              placeholder="Station Wallet"
              value={stationWallet}
              onChange={(e) => {
                setStationWallet(e.target.value);
              }}
            />
          </div>
          {!isStationWalletValid && (
            <div className="text-red-400">Invalid address</div>
          )}
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Number of Connectors
            </label>
          </div>
          <div className="w-full relative">
            <input
              className="relative bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-full-name"
              type="number"
              value={numberOfConnectors}
              min="1"
              onChange={(e) => setNumberOfConnectors(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Charge rate
            </label>
          </div>
          <div className="w-full relative">
            <input
              className="relative bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#4caf50]"
              id="inline-full-name"
              type="number"
              value={chargeRate}
              min="0"
              onKeyUp={(e) => {
                handleKeyUp(e);
              }}
              onChange={(e) => {
                setChargeRate(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 right-10 flex items-center">
              <select
                value={currencySelected}
                onChange={(e) => setCurrencySelected(e.target.value)}
                className="outline-none bg-transparent cursor-pointer rounded-lg"
              >
                <option name="" id="" value="jev">
                  JEV/10min
                </option>
                <option name="" id="" value="usd">
                  $/10min
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-start mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Stake Amount
            </label>
          </div>
          <div className="w-full relative">
            <input
              disabled
              className="cursor-not-allowed bg-gray-500 appearance-none  rounded w-full py-2 px-4 text-white leading-tight"
              id="inline-full-name"
              type="text"
              value={stakeAmountFetched}
            />
            <div className="text-white absolute inset-y-0 right-10 flex items-center">
              <div>JEV</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 flex-col md:items-center md:justify-center">
          <div className="mb-5">
            <ReCAPTCHA
              id="recaptcha"
              ref={captchaRef}
              onChange={(e) => {
                setRecaptchaToken(e);
              }}
              onExpired={(e) => {
                setRecaptchaToken(e);
              }}
              size="normal"
              className="g-recaptcha"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
          </div>
          <div className="w-[75%]">
            <button
              onClick={() => handleSubmit()}
              className="w-full shadow bg-[#4caf50] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:scale-105 transition disabled:cursor-not-allowed disabled:bg-gray-400"
              disabled={recaptchaToken ? false : true}
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ChargingStationRegisterPopUpModel
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        stationName={stationName}
        longitude={longitude}
        latitude={latitude}
        stationWallet={stationWallet}
        numberOfConnectors={numberOfConnectors}
        chargeRate={chargeRate}
        currencySelected={currencySelected}
        stakeAmountFetched={stakeAmountFetched}
      />
    </div>
  );
};

export default RegisterChargingStationForm;
