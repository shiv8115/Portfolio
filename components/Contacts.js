/* eslint react/no-unescaped-entiities */
import React from 'react'
import Link from 'next/link'


import ContactImg from '../public/contact.png'
import Image from 'next/image'
import {AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Let's get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
 {/* left  */}

<div  className='col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 rounded-xl- p-4'>
    <div className='lg:p-4 h-full '>
        <div>
        <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
        </div>
        <div>
            <h2 className='py-2'> Shivam Singh</h2>
            <p >Blockchain Developer</p>
            <p className='py-4'>I am available for part-time and full-time positions. Contact me and let's have a talk.</p>
        </div>
        <div>
        <p className=' uppercase pt-8'>Connect with me</p>

{/* contactinfo */}
<div className='flex items-center justify-between py-4'>

<a
      href="https://www.linkedin.com/in/shivam-kumar-singh-8b35131a9"
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

{/* right  */}

<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4' >

        <form action="https://getform.io/f/891a15c5-c742-442c-aa38-b982df958d95"
        method="POST"
        encType="multipart/form-data"
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                        Name
                    </label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required/>
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                        Phone Number
                    </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>

            </div>

            <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>
                        EMAIL
                    </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required/>

            </div>

            <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>
                        SUBJECT
                    </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="TEXT" required />
            </div>

            <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' >Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    placeholder='Mention phone number or email address in message'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>

                <button className=' hover:scale-105 ease-in duration-300 w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
        </form>
    </div>

</div>
    </div>
    
    <div className='flex justify-center py-12'>
        <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300' >
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
        </Link>
    </div>

    </div>
    </div>
  )
}

export default Contact