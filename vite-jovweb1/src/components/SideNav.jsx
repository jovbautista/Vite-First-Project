import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMenuItemClick = () => {
    setNav(false);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] nd:hidden text-white'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            href="#main"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleMenuItemClick}
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            href="interest"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleMenuItemClick}
          >
            <GrProjects size={20} />
            <span className='pl-4'>Interest</span>
          </a>
          <a
            href="#projects"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleMenuItemClick}
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            href="#contact"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleMenuItemClick}
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        <div className='md:block hidden fixed top-[50%] transform -translate-y-1/2 z-10'>
          <div className='flex flex-col'>
            <a
              href="#main"
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={handleMenuItemClick}
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#interest"
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={handleMenuItemClick}
            >
              <GrProjects size={20} />
            </a>
            <a
              href="#projects"
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={handleMenuItemClick}
            >
              <AiOutlineProject size={20} />
            </a>
            <a
              href="#contact"
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={handleMenuItemClick}
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
