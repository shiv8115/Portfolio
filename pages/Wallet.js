/* eslint react/no-unescaped-entiities */
import React from 'react'
import Image from 'next/legacy/image'
import walletimg from './../public/assets/Projects/wallet.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'




const drawing = () => {
  return (
    <div className='w-full'> 
    <div className='w-screen h-[50vh] relative'>
       <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={walletimg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Decentralized Wallet</h2>
          <h3> </h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        
        <p className='py-3'>
        📌
 Created a Decentralized wallet project, in which user can connect this wallet to the Metamask and send ether to the receiver's address. <br/>
 📌 And as soon as the transaction gets completed the user can see the transaction details like "transactionHash", "blockHash", "gasUsed" etc. in the JSON response section.
        <br/>
        📌
  Used Sepolia test network for transactions, Truffle as the development environment and web3.js for intergration.

        </p>
 

<a href='https://shivam-vishwakarma991.github.io/decentralizedWALLET/'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>



<a href='https://github.com/Shivam-vishwakarma991/decentralizedWALLET'>
<button className='px-8 py-2 mt-4 '>Code</button>
</a>
          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  React JS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  CSS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Truffle
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Metamask
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/> Alchemy
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

export default drawing