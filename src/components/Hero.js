import React from 'react';

import { FiDownload } from 'react-icons/fi';
import Amirhosein from '../assets/img/Me.jpg';
import Resume from '../assets/resume/AmirhoseinMoqaddasiResume.pdf'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Amirhosein! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I'm FrontEnd <br /> Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I design and code beautifully simple things, and I love what I do.
            </p>
            <a download href={Resume} className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all hover:cursor-pointer' >
              My Resume {< FiDownload />}
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-auto'>
            <img src={Amirhosein} alt='' className='rounded-3xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
