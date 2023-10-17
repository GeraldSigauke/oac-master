import React from 'react';
import PricingPoint from "../components/PricingPoint";
import { ascg1t7, wlg5t7, wlg8t9, wlg10t12 } from "../data";

const PricingPage = () => {
  return (
    <>
      <div id='pricing2' className="py-10">
        {/** Container for demo purpose */} 
        <div class="container my-24 mx-auto md:px-6">

          {/** Section: Design Block */} 
          <section id='pricingpage' class="mb-10">
            <h2 id='text5' class="mb-6 text-center text-3xl font-bold text-[#ffff00] pt-8">Pricing</h2>

            <p class="mb-12 text-center text-white dark:text-white">
              Unrivaled Quality at Unbeatable Prices!
            </p>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">

              <div class="mb-6 lg:mb-0">
                <div class="block h-full rounded-lg bg-[#120245] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#120245]">
                  <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center text-white dark:border-opacity-10">
                    <p class="mb-4 text-sm uppercase">
                      <strong>AFTERSCHOOL CARE</strong>
                      <br/>
                      <strong>Grade 1 to 9</strong>
                    </p>
                    <h3 class="mb-6 text-3xl">
                      <strong className="text-[#ffff00]">R500.00</strong>
                      <small class="text-[#ffff00] text-sm">/month</small>
                    </h3>

                    <a href="#marker7">
                      <button type="button"
                        class="bg-white text-[#120245] inline-block w-full rounded hover:font-bold bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        Register
                      </button>
                    </a>
                  </div>
                  <div class="p-6">
                    <ol class="list-inside">
                    
                      {ascg1t7.map(pricingPoint => (
                        <PricingPoint key={pricingPoint.id} pricingPoint={pricingPoint} />
                      ))}

                    </ol>
                  </div>
                </div>
              </div>



              <div class="mb-6 lg:mb-0">
                <div class="block h-full rounded-lg bg-[#120245] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#120245]">
                  <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center text-white dark:border-opacity-10">
                    <p class="mb-4 text-sm uppercase">
                      <strong>WEEKEND LESSONS</strong>
                      <br/>
                      <strong>Grade 5 to 7</strong>
                    </p>
                    <h3 class="mb-6 text-3xl">
                      <strong className="text-[#ffff00]">R500.00</strong>
                      <small class="text-[#ffff00] text-sm">/month</small>
                    </h3>

                    <a href="#marker7">
                      <button type="button"
                        class="bg-white text-[#120245] inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:font-bold hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        Register
                      </button>
                    </a>
                    </div>
                    <div class="p-6">
                    <ol class="list-inside">

                      {wlg5t7.map(pricingPoint => (
                          <PricingPoint key={pricingPoint.id} pricingPoint={pricingPoint} />
                        ))}

                    </ol>
                  </div>
                </div>
              </div>

              <div class="mb-6 lg:mb-0">
                <div class="block h-full rounded-lg bg-[#120245] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#120245]">
                  <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center text-white dark:border-opacity-10">
                    <p class="mb-4 text-sm uppercase">
                      <strong>WEEKEND LESSONS</strong>
                      <br/>
                      <strong>Grade 8 to 9</strong>
                    </p>
                    <h3 class="mb-6 text-3xl">
                      <strong className="text-[#ffff00]">R600.00</strong>
                      <small class="text-[#ffff00] text-sm">/month</small>
                    </h3>

                    <a href="#marker7">
                      <button type="button"
                        class="bg-white text-[#120245] inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:font-bold hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        Register
                      </button>
                    </a>
                    </div>
                    <div class="p-6">
                    <ol class="list-inside">

                      {wlg8t9.map(pricingPoint => (
                          <PricingPoint key={pricingPoint.id} pricingPoint={pricingPoint} />
                        ))}

                    </ol>
                  </div>
                </div>
              </div>

              <div class="mb-6 lg:mb-0">
                <div class="block h-full rounded-lg bg-[#120245] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#120245]">
                  <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center text-white dark:border-opacity-10">
                    <p class="mb-4 text-sm uppercase">
                      <strong>WEEKEND LESSONS</strong>
                      <br/>
                      <strong>Grade 10 to 12</strong>
                    </p>
                    <h3 class="mb-6 text-3xl">
                      <strong className="text-[#ffff00]">R800.00</strong>
                      <small class="text-[#ffff00] text-sm">/month</small>
                    </h3>

                    <a href="#marker7">
                      <button type="button"
                        class="inline-block px-6 py-2.5 bg-transparent text-[#000] font-medium text-xs leading-tight uppercase rounded hover:font-bold  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full bg-[#fafafa]"
                        data-mdb-ripple="true" data-ripple-color="primary">
                        Register
                      </button>
                    </a>
                  </div>
                  <div class="p-6">
                    <ol class="list-inside">

                      {wlg10t12.map(pricingPoint => (
                          <PricingPoint key={pricingPoint.id} pricingPoint={pricingPoint} />
                        ))}

                    </ol>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/** Section: Design Block */}

        </div>
        {/** Container for demo purpose */}
      </div>
    </>
  )
}

export default PricingPage