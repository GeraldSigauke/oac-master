import React from 'react'
import Map from '../components/Map'
import Contact from '../components/Contact'

const VisitUsPage = () => {
  return (
    <>
    <div id='contactus2' className="py-1">
      <div class="container my-24" id="contact">
          <h2 id="text6" class="text-3xl font-bold text-center pt-6 text-[#120245]">
            Visit Us
          </h2>
          <div class="justify-center p-12">
              <Map />
          </div>       
      </div>
    </div>
    </>
  )
}

export default VisitUsPage;