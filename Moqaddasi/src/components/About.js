import React from 'react';
import { Link } from 'react-scroll';

// import img
import Image from '../assets/img/MeAbout.jpeg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Amirhosein Moqaddasi
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I am a young Software engineer who has experienced working with
                a Software Development team for approximately over two years.
                Since beginning my journey as a Front-end developer
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                I am really into anime,
                music and coffee is my favorite drink. Perhaps, you may guess that I am supporting the free Software.
                Therefore, freedom is valuable to me in any form, especially in Software.
                <br />
                <br />
                I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
              </p>
            </div>
            <Link to='contact'
              smooth={true}
              className='btn btn-md bg-accent hover:bg-secondary-hover transition-all hover:cursor-pointer'>
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
