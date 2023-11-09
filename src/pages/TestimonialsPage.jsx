/** 
This CSS is created only for this particular demo 
body {
    background-color: hsl(0, 0%, 98%);
  }
*/

import React from 'react';
import Testimonial from "../components/Testimonial";
import { testimonials } from "../data";

const TestimonialsPage = () => {
  return (
    <>
      <div id='testimonials2' className="py-10 lg:h-screen">
        {/* <!-- Container for demo purpose --> */}
        <div class="container my-24 px-6 mx-auto">

          <section class="mb-10 text-gray-800 text-center">

            <h2 id="text6" class="text-3xl font-bold mb-12">Testimonials</h2>

            <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            
              {testimonials.map(testimonial => (
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            
            </div>

          </section>

        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
    </>
  )
}

export default TestimonialsPage