import Link from 'next/link';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const Error404 = () => {
    return (
        <>

            <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div class="w-full md:w-1/2">
                        <div class="mb-10 lg:mb-20">
                            <img src="/images/logo_dark.png" className='h-10'/>
                        </div>
                        <div class="mb-10 md:mb-20 text-gray-600 font-light">
                            <h1 class="font-black uppercase text-3xl lg:text-5xl text-orange mb-10">You seem to be lost!</h1>
                            <p>The page you're looking for isn't available.</p>
                            <p>Try searching again or use the Go Back button below.</p>
                        </div>
                        <div class="mb-20 md:mb-0">
                            <Link href="/" legacyBehavior><a class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-orange hover:text-yellow-600 flex items-center gap-1"><BiLeftArrow /> Go Back</a></Link>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 text-center">
                        <img src='/images/404.png' />
                        <a href="https://www.freepik.com/vectors/business" target="_blank" class="text-xs text-gray-300">WiiQare à votre service</a>
                    </div>
                </div>
                <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
            </div>

            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="#" target="_blank" class="bg-white flex items-center justify-center w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="/images/favicon.png" className='w-10' />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Error404;
