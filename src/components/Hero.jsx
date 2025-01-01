import React from 'react'

import videoFile from "../assets/uae1.mp4"

const Hero = () => {
    return (
        <>
            <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div class="absolute inset-0">
                    <video class="object-cover w-full h-full md:object-rigth md:origin-top-rigth aspect-video" src={videoFile} loop autoPlay muted ></video>
                </div>

                <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/2 md:text-left">
                        <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text">Discover the Magic of the UAE</h2>
                        <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl bg-gradient-to-l from-amber-200 to-yellow-500 inline-block text-transparent text-rigth bg-clip-text">اكتشف سحر الإمارات</h2>
                        <p class="mt-4 text-base text-left text-gray-200">Your ultimate guide to unforgettable experiences.</p>
                        <p class="mt-4 text-base text-right text-gray-200">دليلك الشامل لتجارب لا تُنسى</p>

                        <div class="mt-8 lg:mt-12">
                            <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                                <a href="#" title="Book Now" class="whitespace-nowrap rounded-xl px-4 py-2 font-medium text-lg text-white transition-all duration-500 bg-gradient-to-r from-amber-400 to-yellow-600 hover:scale-110">Book Now</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero