import React from 'react';
import ContactField from "../components/ContactField";
import { contactField } from "../data";

const Contact = () => {
  return (
    <>
      <div id='contactus'>
        <div class="flex items-center justify-center p-2">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formsubmit.co/oliestaafterschoolcare@gmail.com" method="POST">
              
              {contactField.map(contactField => (
                <ContactField key={ contactField.id } contactField={ contactField } />
              ))}
              
              <div class="mb-5">
                <label
                  id='text3'
                  for="message"
                  class="mb-3 block text-base font-bold text-[#2c5282]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2c5282] focus:shadow-md"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  id="purple-button"
                  class="hover:shadow-form rounded-md bg-[#202020] py-3 px-8 text-base font-semibold text-[ffff00] outline-none"
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact