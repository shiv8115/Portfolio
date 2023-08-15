/* eslint react/no-unescaped-entiities */
import React from "react";
import Image from "next/legacy/image";
import daoImg from "./../public/assets/Projects/dao.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const nftMarketplace = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
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
            <h2 className="py-2">NFT MarketPlace Contract</h2>
            <h3> </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className=" text-xl px-1 uppercase text-[#5651e5]">Project</p>
            <h2>Overview</h2>

            <p className="py-3">
              <b>
                In this project we will develop smart-contracts for an NFT
                Market-Place that has the following features:
              </b>{" "}
              <br />
              📌 Seller can list NFTs for sale at their desired price. Buyer can
              buy the NFT at seller's price Buyer can make an offer for the
              listed NFTs with alternate price Seller can accept or reject that
              offer A Platform fee is charged from the payment The owner of the
              Marketplace can add or remove the ERC20 tokens used as the mode of
              payment The Producer of the NFT gets a royalty with each exchange
              of hands according to ERC2981 Royalty Standard
            </p>

            <a href="https://github.com/shiv8115/Royalty-Marketplace" target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>

            <a href="https://github.com/shiv8115/Royalty-Marketplace" target="_blank">
              <button className="px-8 py-2 mt-4 ">Code</button>
            </a>
          </div>

          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Solidity
                </p>

                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Web3.js
                </p> */}

                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Solidity
                </p> */}
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Hardhat
                </p>

                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Metamask
                </p>
                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Alchemy
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Css */}
                {/* </p> */}
              </div>
            </div>
          </div>
          <Link href="/#project">
            <p className=" px-2 text-bold underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nftMarketplace;
