/* eslint react/no-unescaped-entiities */
import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineFilePdf,
} from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            {' '}
            Hey, I'm <span className="text-[#5651e5]">Shivam Singh </span>{' '}
          </h1>

          <h1 className="py-25 uppercase text-[200%] text-gray-700">
            {' '}
            A Passionate Software Developer
          </h1>

          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            A Full Stack Developer skilled in React.js, Next.js, Node.js, and
            Express.js. I create scalable web apps and smart contracts with
            Solidity, including TerraBlu for blockchain sustainability. I
            optimize backend APIs, craft seamless front-ends, and excel in
            competitive programming.
          </p>

          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/shivam8115/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <RiLinkedinFill />
              </div>
            </a>
            <a
              href="https://github.com/shiv8115"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiFillGithub />
              </div>
            </a>
            <a
              href="https://twitter.com/Shivams8115"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineTwitter />
              </div>
            </a>
            <a
              href="mailto: sk811586@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1RtMS1pUCZAI0UhM-vywMaSQZdjmVaDmx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineFilePdf />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
