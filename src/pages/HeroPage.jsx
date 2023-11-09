import React from 'react';
import { images } from '../constants';

const HeroPage = () => {
  return (
    <>
      <section id="hero" class="mb-10 lg:h-screen">
        <div
          class="px-6 pt-7 md:px-12 text-gray-800 lg:text-left"
        >
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
              <div class="mt-12 lg:mt-0">
                <h1 id="text" class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Home away from Home. <br />
                  <span id="text2" class="text-[#120245] dark:text-[#ffff00]">School away from School.</span>
                </h1>
                <a
                  id="purple-button"
                  class="inline-block px-7 py-3 mr-2 bg-[#120245] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#contactus"
                  role="button"
                >
                  Get started
                </a>
                <a
                  class="inline-block px-7 py-3 bg-transparent text-[#120245] font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#about"
                  role="button"
                  id="transparent-button"
                >
                  Learn more
                </a>
              </div>
              <div class="mb-12 lg:mb-0">
                <img
                  src={ images.hero_pic}
                  class="w-full rounded-lg shadow-lg hover:scale-110"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
