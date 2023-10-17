import React from "react";
import Testimonial from "../components/Testimonial";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    
    <>
      <div id="testimonials2" className="my-10">
        {/** Container for demo purpose */}
        <div class="container mt-5 px-6 mx-auto">

        <section class="mb-32 text-800 text-center">

        <h2 id="text2" class="text-3xl font-bold mb-12 pt-5">Testimonials</h2>

        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            
            {testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>

        </section>

        </div>
        {/** Container for demo purpose */}
      </div>
    </>
    
  )
}

export default Testimonials