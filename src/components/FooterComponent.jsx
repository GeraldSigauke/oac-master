import React from 'react';
import { images } from '../constants';
import { RiWhatsappFill } from 'react-icons/ri';
import { footerProduct, footerUsefulLinks } from '../data';
import FooterProduct from './FooterProduct';
import FooterUsefulLinks from './FooterUsefulLinks';

const FooterComponent = () => {
  const today = new Date();
  const oliestasoftworks = "https://oliestasoftworks.netlify.app";

  return (
    <>
      {/* <!-- Footer container --> */}
      <footer
        id="footer"
        class="bg-[#120245] text-center text-[#ffff00] dark:bg-[#120245] dark:text-[#ffff00] lg:text-left"
      >
        <div class="flex items-center justify-center border-b-2 border-white p-6 dark:border-white lg:justify-between">
          <div class="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div class="flex justify-center">
            <ul class="list-inside flex mx-auto justify-center mr-6">
              <a href="https://wa.me/+27790898947" target="_blank" class="">
                <RiWhatsappFill class="w-5 h-5" />
              </a>
            </ul>
          </div>
        </div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Tailwind Elements section --> */}
            <div id="text9" class="">
              <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <a href="#home">
                  <img className="w-7 pr-2" src={images.small_logo} alt="logo" />
                </a>
                <a id="text9" href="#home">OLIESTA AFTERSCHOOL CARE</a>
              </h6>
              <p>
              Home away from Home. School away from School.  Let us get your child to a peak level of academic performance. Allow us to fully prepare your little one for high school and tertiary education in the years to come.
              </p>
            </div>
            {/* <!-- Products section --> */}
            <div id="text8" class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Services
              </h6>

              {footerProduct.map((footerProduct) => (
                <FooterProduct
                  key={footerProduct.id}
                  footerProduct={footerProduct}
                />
              ))}
            </div>
            {/* <!-- Useful links section --> */}
            <div id="text7" class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>

              {footerUsefulLinks.map((footerUsefulLinks) => (
                <FooterUsefulLinks
                  key={footerUsefulLinks.id}
                  footerUsefulLinks={footerUsefulLinks}
                />
              ))}
            </div>
            {/* <!-- Contact section --> */}
            <div id='text10'>
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Hazyview, 1242, Mpumalanga, South Africa
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href="mailto:oliestaafterschoolcare@gmail.com">
                  oliestaafterschoolcare@gmail.com
                </a>
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a href="tel:+27 79 089 8947">+27 79 089 8947</a>
              </p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div id="text6" class="bg-[#0b022a] p-6 text-center dark:bg-[#0b022a]">
          <a href = { oliestasoftworks } target="blank" className="">
            Powered By OLIESTA SOFTWORKS
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
