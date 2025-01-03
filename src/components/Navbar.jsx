import React from 'react'

const Navbar = () => {
    return (
        <>
            <header class="relative mx-auto flex flex-col overflow-hidden px-20 py-4 lg:flex-row lg:items-center border-b border-amber-500">
                <a href="#" class="flex items-center whitespace-nowrap text-2xl font-normal text-amber-400 transition-all duration-500 hover:text-amber-500 hover:scale-110">
                    {/* <span class="mr-2 w-8">Image</span> */}
                    Jounrney
                </a>
                <input type="checkbox" class="peer hidden" id="navbar-open" />
                <label class="absolute top-5 right-5 cursor-pointer lg:hidden text-amber-600" for="navbar-open">
                    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
                <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 ">
                        <li class="lg:mr-12 transition duration-200 hover:scale-110"><a class="text-amber-400 transition-all duration-200 hover:text-amber-500" href="#">Home</a></li>
                        <li class="lg:mr-12 transition duration-200 hover:scale-110"><a class="text-amber-400 transition-all duration-200 hover:text-amber-500" href="#">About Us</a></li>
                        <li class="lg:mr-12 transition duration-200 hover:scale-110"><a class="text-amber-400 transition-all duration-200 hover:text-amber-500" href="#">Tour & Packages</a></li>
                        <li class="lg:mr-12 transition duration-200 hover:scale-110"><a class="text-amber-400 transition-all duration-200 hover:text-amber-500" href="#">FAQ</a></li>
                    </ul>
                    <hr class="mt-4 w-full lg:hidden" />
                    <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                        <a href="#" title="" class="whitespace-nowrap rounded-xl px-4 py-2 font-medium text-white transition-all duration-200 bg-gradient-to-r from-amber-400 to-yellow-600">Book Now</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar