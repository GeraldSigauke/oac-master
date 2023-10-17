import React from 'react';
import { images } from '../constants';import { RiWhatsappFill } from 'react-icons/ri';

const Footer = () => {
  
  const today = new Date();

  return (
    <footer id='footer' class="bg-[yellow] text-black text-center pb-3">
      <div class="container px-6 pt-6">
        <div class="text-center p-4 mb-6">
          Copyright © {today.getFullYear()} :
          <a href="#marker1" className=''>
            {' '}
            OLIESTA AFTERSCHOOL CARE
          </a>
        </div>

        <ul class="list-inside flex mx-auto justify-center mb-6">
                <a href="https://wa.me/+27790268051" target="_blank" class="px-2">
                 <RiWhatsappFill class="w-5 h-5" />
                </a>
        </ul>

        <div class="text-center p-4 mb-6">
          This Landing Page was Created By
          <a
            href="https://oliestasoftworks.netlify.app/"
            target="blank"
          >
            {' '}
            OLIESTA SOFTWORKS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
