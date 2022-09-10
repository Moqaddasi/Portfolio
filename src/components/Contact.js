import React from 'react';
import Socials from './Socials';
//  icons
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

// import contact data
import { contact } from '../data';


const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
            <h4 className='uppercase'>Socials</h4>
            <div className='flex flex-row gap-x-4' >
              <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl hover:text-white'>
                <a href='https://github.com/amirhoseinmoqaddasi/'>
                  <FiGithub />
                </a>
              </div>
              <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl hover:text-white'>
                <a href='https://www.linkedin.com/in/amirhosein-moqaddasi/'>
                  <FiLinkedin />
                </a>
              </div>
              <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl hover:text-white'>
                <a href='https://twitter.com/Ah_moqaddasi'>
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' required />
              <input className='input' type='email' placeholder='Your email' required />
            </div>
            <input className='input' type='text' placeholder='Subject' required />
            <textarea
              className='textarea'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
