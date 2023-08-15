/* eslint react/no-unescaped-entiities */
import React from 'react'
import Image from 'next/legacy/image'
import CreditImg from './../public/assets/Projects/Credit.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'




const dao = () => {
  return (
    <div className='w-full'> 
    <div className='w-screen h-[50vh] relative'>
       <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={CreditImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Staking Contract</h2>
          <h3> </h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        
        <p className='py-3'>
        <b> Implemented smart contract that showcases my understanding of blockchain technology and critical way of thinking </b> <br/> <br/>

        📌 The contract Contract should be Upgradeable and TwoStepOwnable 
  <br/> 📌 The whitelist can be updated by the owner of the contract<br/>
  📌 Use OZs Enumerable Address Set to maintain the list <br/>
  📌 Use OZs AccessControl lib for putting role checks <br/>
  📌 The contract generates reward tokens for the user based on how long the user has staked their assets <br/>
  📌 1 reward token is to be given for every 5 blocks added in chain for users staking period.
<br/> <br/>
   Note - There is start and end time of staking period, user cannot deposit before start and after end time
No reward is generated after the end time of the staking.


        </p>
 

<a href='https://shivam-vishwakarma991.github.io/Decentralised-Credit-system/'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>



<a href='https://github.com/Shivam-vishwakarma991/Decentralised-Credit-system'>
<button className='px-8 py-2 mt-4 '>Code</button>
</a>
          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            {/* <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  React.js
              </p> */}

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Ether.js
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Solidity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Hardhat
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Metamask
              </p>
              {/* <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Alchemy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Css
              </p> */}

                   
       </div>
      </div>
      </div>
      <Link href='/#project' >
      <p className=' px-2 text-bold underline cursor-pointer'>Back</p>
    </Link>


    </div>
    



  </div>
  </div>
  )
}

export default dao