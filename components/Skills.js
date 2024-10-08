import React from "react";
import Image from "next/image";
import cppimg from "../public/assets/Skills/c++LOGO.png";
import solimg from "../public/assets/Skills/soliditylogo.png";
import htmlimg from "../public/assets/Skills/htmllogo.png";
import cssimg from "../public/assets/Skills/csslogo.png";
import javaimg from "../public/assets/Skills/javascriptlogo.png";
import reactimg from "../public/assets/Frameworks/reactLOGO.png";
import express from "../public/assets/Frameworks/Express.png";
import chai from "../public/assets/Frameworks/Chai.png";
import mocha from "../public/assets/Frameworks/mocha.png";
import leetcode from "../public/assets/Frameworks/leetcode.png";
import gfg from "../public/assets/Frameworks/gfg.png";
import hacker from "../public/assets/Frameworks/hacker.png";
import codechef from "../public/assets/Frameworks/codechef.png";
// import alchemy from "../public/assets/Frameworks/Alchemy.png";
import eth from "../public/assets/Frameworks/ETHERJSlogo.png";
import web from "../public/assets/Frameworks/web3jsLOGO.png";
import node from "../public/assets/Frameworks/nodejsLOGO.png";
// import truff from "../public/assets/Frameworks/truffleLOGO.png";
import hardhat from "../public/assets/Frameworks/hardhatLOGO.png";
import remix from "../public/assets/Tools/REMIX.png";
import vscode from "../public/assets/Tools/vscode.jpeg";
import azure from "../public/assets/Tools/azure.png";
import ganace from "../public/assets/Tools/jira.png";
import meta from "../public/assets/Tools/metamask.png";
import alchemy from "../public/assets/Tools/git1.png";

// import Link from "next/link";
const Skills = () => {
  return (
    <div id="skills" className="w-full h-auto p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 ">What I can do</h2>
        <h2 className="py-0 text-xl ">Programming Languages I know</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cppimg} width={64} height={64} alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  C++
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={solimg} width={64} height={64} alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  SOLIDITY
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javaimg} width={64} height={64} alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  JAVA SCRIPT
                </h3>
              </div>
            </div>
          </div>

          {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlimg} width={64} height={64} alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  HTML
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssimg} width={64} height={64} alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  CSS
                </h3>
              </div>
            </div>
          </div> */}

          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javaimg} width={64} height={64} 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>JAVA SCRIPT</h3>
                        </div>
                    </div>
                </div> */}
        </div>

        <div>
          <h2 className="py-6 text-xl ">Frameworks || Libraries I know</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={node} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    NODEJS
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={reactimg} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    REACTJS
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className=" m-auto ml-0">
                  <Image src={express} width={64} height={100} alt="/" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="flex flex-col items-center justify-center  mt-1">
                    Express JS
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={eth} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center ">
                    ETHERJS
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={web} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    WEB3JS
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={hardhat} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    HARDHAT
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={chai} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    CHAI
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={mocha} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    MOCHA
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h2 className="py-6 text-xl ">Platforms I am Familiar With.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={vscode} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    VS CODE
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={alchemy} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    BITBUCKET
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ganace} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                    JIRA
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={azure} width={64} height={64} alt="/" />
                </div>
                <div>
                  <h3 className="flex flex-col items-center justify-center">
                   AZURE
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h2 className="py-6 text-xl ">Problem Solving skills(Link)</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://leetcode.com/sk811586/" target = "_blank"> 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={leetcode} width={90} height={70} alt="/" />
              </div>
            </div>
            
          </div>
          </a>

          <a href="https://auth.geeksforgeeks.org/user/codebeans/practice/" target = "_blank"> 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={gfg} width={450} height={70} alt="/" />
              </div>
            </div>
            
          </div>
          </a>

          <a href="https://www.codechef.com/users/sk811586" target = "_blank"> 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={codechef} width={150} height={70} alt="/" />
              </div>
            </div>
            
          </div>
          </a>

          <a href="https://www.hackerrank.com/sk811586?hr_r=1" target = "_blank"> 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={hacker} width={100} height={70} alt="/" />
              </div>
            </div>
            
          </div>
          </a>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
