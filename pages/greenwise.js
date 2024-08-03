import React from "react";
import Image from "next/legacy/image";
import daoImg from "./../public/assets/Projects/dao.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const openriver = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={daoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Greenwise Platform</h2>
          <h3>Blockchain-based Carbon Accounting & Trading</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl px-1 uppercase text-[#5651e5]">Project</p>
          <h2>Overview</h2>

          <p className="py-3">
            <b>
              Greenwise is a comprehensive carbon accounting platform designed to meet all business needs. It allows businesses to assess their carbon emissions, analyze and accurately report emission sources and processes, offset emissions, and achieve ESG sustainability goals. The platform offers a 360° view of business operations, seamlessly integrating blockchain technology to facilitate carbon credits trading, generating NFTs, pooling assets, and fractionalizing green assets.
            </b>{" "}
          </p>

          <p className="py-3">
            📌 Reduction of Carbon Emissions
          </p>
          <p className="py-3">
            📌 Pioneering Climate Technology
          </p>
          <p className="py-3">
            📌 Empowering Stakeholders
          </p>
          <p className="py-3">
            📌 Trusted, Transparent, and Traceable Network
          </p>

          <a href="https://qa.terrablu.in/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>

          <a href="https://www.oklink.com/amoy/token/0x093034eF06b05c973168F887682130E2f9602701" target="_blank">
            <button className="px-8 py-2 mt-4">Smart Contract</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Blockchain
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> EtherJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
            </div>
          </div>
        </div>

        <Link href="/#project">
          <p className="px-2 text-bold underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default openriver;
