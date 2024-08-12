import React from "react";
import Image from "next/legacy/image";
import ourthImg from "./../public/assets/Projects/ourth.png"; // Update with the correct image path
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ourth = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ourthImg}
          alt="Ourth Project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ourth</h2>
          <h3>Eco-Friendly Packaging Solutions</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl px-1 uppercase text-[#5651e5]">Project</p>
          <h2>Overview</h2>

          <p className="py-3">
            <b>
              Ourth is at the forefront of revolutionizing packaging by eliminating single-use plastics with innovative, eco-friendly, and biodegradable solutions. As a backend developer for the Ourth project, I played a crucial role in setting up the backend architecture, designing schemas for various tables, and developing multiple APIs. Key integrations included Twilio for OTP functionality and Razorpay for secure payment processing.
            </b>
          </p>

          <p className="py-3">
            <b>What We Do:</b>
            <br />
            Ourth not only offers eco-friendly alternatives to conventional packaging but also focuses on repurposing waste materials. Through our app, users can earn carbon credits that are transparently tracked on the blockchain. Our mission is to foster responsible consumerism and contribute to a more sustainable future.
          </p>

          <p className="py-3">
            <b>Key Features:</b>
          </p>
          <ul className="list-disc pl-5 py-3">
            <li>📌 Responsible Manufacturing</li>
            <li>📌 Conscious Consumerism</li>
            <li>📌 Innovative Green Products</li>
            <li>📌 Transparent Supply Chain Through Blockchain</li>
          </ul>

          <p className="py-3">
            <b>Our Products:</b>
            <br />
            Our range includes biodegradable paper soup cups, plates, glasses, straws, sandwich boxes, and more. Each product is designed with sustainability in mind, ensuring high quality and minimal environmental impact.
          </p>
{/* 
          <a href="https://ourth-demo-link.com" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a> */}
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Twilio
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Razorpay
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flutter
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

export default ourth;
