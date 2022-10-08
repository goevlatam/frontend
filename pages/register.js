import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout";
import RegisterChargingStationForm from "../components/RegisterChargingStationForm";
import RegisterProviderForm from "../components/RegisterProviderForm";

const Register = () => {
  const [isProvider, setIsProvider] = useState(false);
  return (
    <Layout>
      {" "}
      <div className="w-full flex justify-center items-center">
        <div className="bg-[#1d1d1d54] mt-1 md:mt-10  mx-3 w-full md:w-[50%] py-8 px-3 register-form-border border-[#4caf50] rounded-[25px] pb-[100px]">
          <Head>
            <title>Registration</title>
          </Head>
          {isProvider ? (
            <RegisterChargingStationForm />
          ) : (
            <RegisterProviderForm />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Register;
