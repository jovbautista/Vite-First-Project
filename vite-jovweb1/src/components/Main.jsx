import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Interest from './Interest';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover'
        src="https://wallpapers.com/images/hd/4k-tech-1eweq7h47kehxd7y.jpg"
        alt="/"
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-white'>I'm Jov Bautista</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
            I'm a
            <TypeAnimation
              sequence={[
                'BSCS student',
                2000,
                'Front-end Developer',
                2000
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px', color: 'white' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[60px] w-full'>
            <a href="https://www.facebook.com/jovbautistaa/" target="_blank" rel="noopener noreferrer">
              <BsFacebook className='cursor-pointer text-white' size={20} />
            </a>
            <a href="https://www.instagram.com/osakisai/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className='cursor-pointer text-white' size={20} />
            </a>
          </div>
        </div>
        <Interest />
      </div>
    </div>
  );
};

export default Main;
