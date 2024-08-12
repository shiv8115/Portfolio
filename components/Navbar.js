/* eslint react/no-unescaped-entiities */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import navimg from '../public/svlogo.png';

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [shadow, setshadow] = useState(false);
  const [navBg, setnavBg] = useState('#ecf0f3');
  const [linkColor, setlinkColor] = useState('#1f2937');
  const router = useRouter();
  const key = router.asPath;

  useEffect(() => {
    if (router.asPath === '/krypt' || router.asPath === '/drawing' || router.asPath === '/portfolio') {
      setnavBg('transparent');
      setlinkColor('#ecf0f3');
    } else {
      setnavBg('#ecf0f3');
      setlinkColor('#1f2937');
    }
  }, [router]);

  const handlenav = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const handelshadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true);
      } else {
        setshadow(false);
      }
    };

    window.addEventListener('scroll', handelshadow);
  }, []);

  return (
    <div
      key={key}
      style={{ backgroundColor: navBg }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={navimg} alt='image' width={125} height={50} />

        <div>
          <ul style={{ color: linkColor }} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase font-semibold hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase font-semibold hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase font-semibold hover:border-b'>Skills</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 text-sm uppercase font-semibold hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase font-semibold hover:border-b'>Contact</li>
            </Link>
            <a href='https://drive.google.com/file/d/16uk6GGVkVRveWVQCgb7AGQsEvkI1BI6U/view?usp=sharing' target='_blank' rel='noreferrer'>
              <li className=' me-5 ml-10 text-sm uppercase font-semibold hover:border-b'>View Resume</li>
            </a>
          </ul>

          <div onClick={handlenav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0fc] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={navimg} alt='/' width='85' height='35' />
              <div onClick={handlenav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>

            <div className='border-b border-gray-500 my-4'>
              <p className='font-semibold w-[85%] md:w-[90%] py-4'>Let's build something together</p>
            </div>
          </div>

          <div className='flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  Skills
                </li>
              </Link>
              <Link href='/#project'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  Contact
                </li>
              </Link>
              <div className='me-4'>
              <a href='https://drive.google.com/file/d/10qEE2b5TNRTrkpE1_gH9BBsS3XsDn7P1/view?usp=sharing' target='_blank' rel='noreferrer'>
                <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                  View Resume
                </li>
              </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
