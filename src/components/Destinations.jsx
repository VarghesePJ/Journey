import React from 'react'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Destinations = () => {
    return (
        <>
            <section className='bg-gradient-to-br from-zinc-800 to-zinc-900 mx-auto py-4 m-4 border-b border-t border-amber-300  '>
                <div className='text-center'>
                    <h2 className='text-center bg-gradient-to-r from-amber-300 to-yellow-500 inline-block text-transparent bg-clip-text font-medium text-4xl py-4'>Featured Destination</h2>
                </div>
                <div className='grid grid-cols-1'>
                    <div class="relative py-20 overflow-hidden border-b border-amber-300">
                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={img1} alt="" />
                        </div>

                        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                        <div class="absolute inset-0 block bg-gradient-to-r md:block from-black to-transparent"></div>

                        <div className='relative px-4 mx-auto max-w-7xl'>
                            <h1 className='text-5xl text-left font-bold bg-gradient-to-r from-amber-300 to-yellow-500 text-transparent inline-block bg-clip-text'>Dubai</h1>
                            <p className='text-white py-2 text-left'>The City Of Dreams</p>
                        </div>
                    </div>
                    <div class="relative py-20 overflow-hidden border-b border-amber-300">
                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={img2} alt="" />
                        </div>

                        <div class="absolute inset-0 hidden bg-gradient-to-l md:block from-black to-transparent"></div>

                        <div class="absolute inset-0 block bg-gradient-to-l md:block from-black to-transparent"></div>

                        <div className='relative px-4 mx-auto max-w-7xl'>
                            <h1 className='text-5xl text-right font-bold bg-gradient-to-r from-amber-300 to-yellow-500 text-transparent bg-clip-text'>Abu Dhabi</h1>
                            <p className='text-white py-2 text-right'>Cultural heritage and luxury</p>
                        </div>
                    </div>
                    <div class="relative py-20 overflow-hidden border-b border-amber-300">
                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={img3} alt="" />
                        </div>

                        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                        <div class="absolute inset-0 block bg-gradient-to-r md:block from-black to-transparent"></div>

                        <div className='relative px-4 mx-auto max-w-7xl'>
                            <h1 className='text-5xl text-left font-bold bg-gradient-to-r from-amber-300 to-yellow-500 text-transparent inline-block bg-clip-text'>Ras Al Khaimah</h1>
                            <p className='text-white py-2 text-left'>Nature and adventure</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations