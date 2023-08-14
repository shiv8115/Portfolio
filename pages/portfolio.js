/* eslint react/no-unescaped-entiities */
import React from 'react'
import Image from 'next/legacy/image'
import portfolioImg from './../public/assets/Projects/portfolio.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const portfolio = () => {
  return (
    <div className='w-full'> 
    <div className='w-screen h-[50vh] relative'>
       <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={portfolioImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Portfolio website</h2>
          <h3>Next Js / TailwindCss</h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        

        <p>
            <br />
            📌 Tech stack used for building this portfio-website are NextJS and TailwindCss.<br/>
            📌 The project also features smooth scrolling for excellent user experiece.<br />
            📌  Messages that the user sends are recieved using getForm.io <br />
            📌  Hosted over -Netlify<br /><br />

            <span className="py-2 font-semibold">😎
Cool NextJS features - </span><br />
            Most known for server side rendring, lazy loading images, and a built in routing system. <br />

            Used Incorporate lazy loading images as well as the built in router <br />  <br />
          </p>

<a href='https://main--steady-churros-e6a86a.netlify.app/'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>
<a href='https://github.com/Shivam-vishwakarma991/Website-Portfolio'>
<button className='px-8 py-2 mt-4 '>Code</button></a>

          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  NextJS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  TailwindCSS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  JavaScript
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

export default portfolio