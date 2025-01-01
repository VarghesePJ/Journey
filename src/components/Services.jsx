import React from 'react'

import { PiCityDuotone } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { TbCarSuvFilled } from "react-icons/tb";

const Services = () => {
    return (
        <>
            <div class="container bg-gradient-to-br from-zinc-800 to-zinc-900 mx-auto py-4 m-4 border border-amber-300 rounded-3xl ">
                <div className='text-center'>
                    <h2 className='text-center bg-gradient-to-r border-b border-amber-300 from-amber-300 to-yellow-500 inline-block text-transparent bg-clip-text font-medium text-4xl py-4'>Our Srevices</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                    <div className='text-center py-4'>
                        <TbCarSuvFilled className="mx-auto text-zinc-800 text-5xl m-4 bg-amber-100 p-2 rounded-full drop-shadow-lg" />
                        <h1 className='text-2xl font-medium bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Desert Safaris</h1>
                        <h1 className='text-2xl font-medium bg-gradient-to-l from-amber-200 to-yellow-500 text-transparent bg-clip-text'>سفاري الصحراء</h1>
                        <p className='text-sm font-light text-gray-50 p-4'>Experience the thrill of dune bashing and camel rides.</p>
                    </div>
                    <div className='text-center py-4'>
                        <PiCityDuotone className="mx-auto text-zinc-800 text-5xl m-4 bg-amber-100 p-2 rounded-full drop-shadow-lg" />
                        <h1 className='text-2xl font-medium bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>City Tours</h1>
                        <h1 className='text-2xl font-medium bg-gradient-to-l from-amber-200 to-yellow-500 text-transparent bg-clip-text'>جولات المدينة</h1>
                        <p className='text-sm font-light text-gray-50 p-4'>Explore Dubai, Abu Dhabi, and beyond.</p>
                    </div>
                    <div className='text-center py-4'>
                        <MdAttachMoney className="mx-auto text-zinc-800 text-5xl m-4 bg-amber-100 p-2 rounded-full drop-shadow-lg" />
                        <h1 className='text-2xl font-medium bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Luxury Experiences</h1>
                        <h1 className='text-2xl font-medium bg-gradient-to-l from-amber-200 to-yellow-500 text-transparent bg-clip-text'>تجارب فاخرة</h1>
                        <p className='text-sm font-light text-gray-50 p-4'>Indulge in exclusive yacht cruises and fine dining.</p>
                    </div>
                    <div className='text-center py-4'>
                        <MdLocalActivity className="mx-auto text-zinc-800 text-5xl m-4 bg-amber-100 p-2 rounded-full drop-shadow-lg" />
                        <h1 className='text-2xl font-medium bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Adventure Activities</h1>
                        <h1 className='text-2xl font-medium bg-gradient-to-l from-amber-200 to-yellow-500 text-transparent bg-clip-text'>أنشطة المغامرة</h1>
                        <p className='text-sm font-light text-gray-50 p-4'>Try skydiving, scuba diving, and more.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services