/* eslint react/no-unescaped-entiities */
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {' '}
            let's build something together
          </p>

          <h1 className="py-4 text-gray-700">
            {' '}
            Hey, I'm <span className="text-[#5651e5]">Shivam Singh </span>{' '}
          </h1>

          <h1 className="py-25 uppercase text-[200%] text-gray-700">
            {' '}
            A Passionate Software Developer
          </h1>

          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I am Shivam Singh, a passionate Full Stack Developer with a deep expertise in building scalable web applications using React.js, Next.js, Node.js, and Express.js. With a robust foundation in JavaScript and a keen interest in blockchain technology, I specialize in developing secure and efficient smart contracts using Solidity. My experience spans across creating innovative platforms like TerraBlu, which leverages blockchain to drive environmental sustainability. I thrive in solving complex challenges, whether it's optimizing backend API frameworks or integrating seamless front-end experiences. Beyond development, I'm committed to continuous learning and actively engage in competitive programming, where I've achieved notable global rankings.
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
              href="https://drive.google.com/file/d/10qEE2b5TNRTrkpE1_gH9BBsS3XsDn7P1/view?usp=sharing"
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
