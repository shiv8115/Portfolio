/* eslint react/no-unescaped-entiities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import pix from '../public/shivam.jpg'

const About = () => {
  return (
    <div id='about' className='w-full  p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <h2 className='py-4 '>Who I Am</h2> 
                
                <p>🔭 I'm an experienced solidity developer with expertise in understanding and delivering software solutions based on business requirements.</p>
                
                <p className='py-2'> 🌱 My interest lies in NFTs, Marketplaces, Decentralised Finance and Blockchain development in general. </p>

<p className='py-2'>👯 I’m looking to collaborate on Blockchain based project</p>
<pre/>

<p className='py-2'>🥇 I'm an expert in Solidity for smart contract development and have been actively doing smart contract auditing which also helps me to write optimized and secure contracts.</p>
<pre/>
<pre/>
<pre/>

<p className='py-2'>💬 Ask me about Solidity, NFTs, Cryptocurrency, Data structures and Algorithms, Blockchain, JavaScript, Nodejs, C++, Database</p>
                <Link href='/#project'>
                <p  className='py-2 text-gray-600 cursor-pointer underline'>Check out some of my latest projects</p>
                </Link>
              </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8'>
                <Image className='rounded-3xl rounded-tr-3xl object-contain md:object-cover' src={pix} width={1300} height={34} />
                </div>
        </div>
    </div>
  )
}

export default About