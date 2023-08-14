/* eslint react/no-unescaped-entiities */
import React from 'react'
import Image from 'next/legacy/image'
import daoImg from './../public/assets/Projects/dao.png'
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
          src={daoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Decentralized Autonomous Organization</h2>
          <h3> </h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        
        <p className='py-3'>
        <b> I created a decentralized autonomous organization (DAO) using a smart contract written in Solidity.</b> <br/>
        📌
  This DAO enables investors to pool their funds together and make collective decisions on how to use them. The DAO contract allows investors to contribute ether and receive shares in return. 
  <br/>📌 They can also redeem shares or transfer them to others. The manager has the power to create proposals for how the funds should be used, and investors can vote on them. Once a proposal receives enough votes, the manager can execute it and the funds are transferred to the recipient. <br/>
Certainly, the <b>quorum</b> is a key feature of this project that ensures the control is not entirely in the hands of the manager. The quorum is the minimum percentage of total shares required for a proposal to be executed. This means that if the manager proposes a decision that is not supported by the majority of investors, it will not be executed even if the manager wants it to. The quorum is set at the time of contract deployment and can only be changed by the manager. This ensures that the investors have a say in the decision-making process and their interests are protected.

        </p>
 

<a href='https://shivam-vishwakarma991.github.io/Decentralised_Autonomous_ORganization/'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>



<a href='https://github.com/Shivam-vishwakarma991/Decentralised_Autonomous_ORganization'>
<button className='px-8 py-2 mt-4 '>Code</button>
</a>
          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  React.js
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Web3.js
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Solidity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Truffle
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Metamask
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Alchemy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Css
              </p>

                   
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