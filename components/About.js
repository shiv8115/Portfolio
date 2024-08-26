/* eslint react/no-unescaped-entiities */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pix from '../public/shivam.jpg';

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am testing</h2>

          <p>
            🔭 I'm a dedicated and results-driven Software Developer with over a year of hands-on experience in full-stack development and blockchain technology. Currently, I am contributing to innovative projects at AskGalore Digital India Pvt Ltd, where I lead the development of TerraBlu, a blockchain-based carbon emission calculator and offset application.
          </p>

          <p className="py-2">
            🌱 My work involves creating robust microservices, developing smart contracts, and building seamless APIs with Express.js, all while administering and optimizing PostgreSQL databases. I am passionate about solving complex problems and building efficient, scalable applications.
          </p>

          <p className="py-2">
            👯 I’m looking to collaborate on both Blockchain-based projects and full-stack projects using the MERN stack. My technical expertise spans across C/C++, JavaScript, Solidity, NextJs, NodeJs, and ExpressJs.
          </p>

          <p className="py-2">
            🥇 I specialize in Solidity for smart contract development and actively perform smart contract auditing, ensuring optimized and secure contracts. Previously, at Qodeleaf, I developed secure and scalable smart contracts and contributed to improving development processes.
          </p>

          <p className="py-2">
            💬 Ask me about Solidity, NFTs, Cryptocurrency, Data Structures and Algorithms, Blockchain, JavaScript, Node.js, C++, and Database management.
          </p>
          <Link href="/#project">
            <p className="py-2 text-gray-600 cursor-pointer underline">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8">
          <Image
            className="rounded-3xl rounded-tr-3xl object-contain md:object-cover"
            src={pix}
            width={1300}
            height={34}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
