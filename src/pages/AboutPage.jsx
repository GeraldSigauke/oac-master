import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div id='content' className="lg:h-screen">
        {/* <!-- Container for demo purpose --> */}
        <div class="container my-24 px-6 mx-auto">

          {/* <!-- Section: Design Block --> */}
          <section class="mb-10">
            {/* <!-- Jumbotron --> */}
            <div class="container mx-auto xl:px-32 text-center lg:text-left">
              <div class="grid lg:grid-cols-2 flex items-center">
                <div class="mb-12 lg:mb-0 z-40">
                  <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#18012d] backdrop-filter backdrop-blur-lg"
                    style = {{ background: "hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)" }}>
                    <h2 class="text-3xl font-bold mb-6 text-[#ff4d00]">Who We Are</h2>
                    <p class="text-[#ffffff] mb-6 pb-2 lg:pb-0">
                      We are a small team of experienced and zealous educators who help primary school level pupils achieve top academic performance by revisiting all topics covered in class and providing vigorous homework assistance in all learning areas using a teaching and leaning system which enables educators help students on a one on one basis.
                    </p>

                    <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                      <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 text-[#ffff00]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                          <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        Best team
                      </p>

                      <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 text-[#ffff00]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                          <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        Best quality
                      </p>

                      <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0 text-[#ffff00]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                          <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        Best experience
                      </p>
                    </div>


                    <p className=' text-[#ffffff]'>
                      <strong className=' text-[#ffff00]'>Vision</strong><br/>
                      To see students ascend to a level of peak primary academic performance and being fully prepared for high school and tertiary education in the years to come.
                    </p>
                    <p className=' text-[#ffffff]'>
                      <strong className=' text-[#ffff00]'>Mission</strong><br/>
                      To ensure that all students achieve peak academic performance and realize their full potential.
                    </p>

                    <p className=' text-[#ffffff]'>
                    <strong className=' text-[#ffff00]'>Goals</strong><br/>
                      <ul class="list-disc list-inside mb-6">
                        <li>To provide vigorous after school
                        homework assistance.</li>
                        <li>To revisit all the topics covered in class.</li>
                        <li>To solidify grasping of concepts.</li>
                        <li>To offer one on one teacher learning
                        leaning experience.</li>
                        <li>To revive struggling students.</li>
                        <li>To provide a safe educational haven for students which shelters students as a after school resort.</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div>
                  <img src="https://images.pexels.com/photos/5088021/pexels-photo-5088021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-full rounded-lg shadow-lg z-30"
                    alt="" 
                  style={{
                    aspectRatio: ""
                  }}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Jumbotron --> */}
          </section>
          {/* <!-- Section: Design Block --> */}

        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
    </>
  )
}

export default AboutPage