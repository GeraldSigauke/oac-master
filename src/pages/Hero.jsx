import React from 'react';

const Hero = () => {
    return (
      <hero id="hero">
        <div class="text-center  py-20 px-6">
          <h1 class="text-5xl font-bold mt-0 mb-6">OLIESTA AFTERSCHOOL CARE</h1>
          <h2 class="text-5xl font-bold mt-0 mb-6">& HOMEWORK ASSISTANCE</h2>
          <h3 class="text-3xl font-bold mb-8">Home away from Home. School away from School.</h3>
          <a
            href="#marker3"
            class="inline-block px-6 py-2.5 text-[#000] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#333] hover:shadow-lg focus:bg-[#333] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#333] active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            role="button"
            id='button'
          >
            Get started
          </a>
        </div>
      </hero>
    );
};

export default Hero;