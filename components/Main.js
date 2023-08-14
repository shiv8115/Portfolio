/* eslint react/no-unescaped-entiities */
import React from 'react'
import {  AiFillGithub,AiOutlineTwitter,AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'



const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
        <p className='uppercase text-sm tracking-widest text-gray-600'> let's build something together</p>
        
        <h1 className='py-4 text-gray-700'> Hey, I'm <span className= 'text-[#5651e5]'>Shivam Singh </span> </h1>

        <h1 className='py-25 uppercase text-[200%] text-gray-700'> A Passionate blockchain developer</h1>

        <p className='py-4 text-gray-700 max-w-[70%] m-auto'>I'm passionate about blockchain development. With a strong background in Solidity, I specialize in transforming intricate business needs into secure and optimized smart contracts. My journey has been driven by a fascination with NFTs, Marketplaces, and Decentralized Finance.. </p>

        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

        <a
              href="https://www.linkedin.com/in/shivam8115/"
              target="_blank"
              rel="noreferrer"
            >

          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
            <RiLinkedinFill />
          </div>
          </a>
          <a
              href="https://github.com/shiv8115"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiFillGithub />
          </div>
          </a>
          <a
              href="https://twitter.com/Shivams8115"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineTwitter />
          </div>
          </a>
          <a
              href="mailto: sk811586@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineMail />
          </div>
          </a>

        </div>

        
          </div>
        </div>
    </div>
  )
}

export default Main