import React from 'react'

function Publication() {
  return (
    <>
    <div className=''>
        <div className='pt-10 grid place-items-center lg:place-items-end lg:pt-20 lg:pr-40'>
            <div className='float-right text-[16px] lg:text-2xl sm:text-sm md:text-xl w-44 sm:w-40 md:w-48 lg:w-60 p-4 lg:p-8 font-semibold bg-ourpurple'>
                <h1 className='text-white border-b-4 lg:border-l-8 lg:border-b-0 border-babypink pb-2 lg:pl-2 font-bold'>PUBLICATIONS
                </h1>
            </div>
        </div>
        <div className='px-10 lg:-mt-8 lg:pl-40 lg:pr-40'>
            <div className='pr-8 py-8 lg:pr-20 lg:py-10 xl:pr-16 lg:w-10/12 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 rounded-3xl'>
                <p className='pr-4 pl-10 lg:pr-8 lg:pl-12 border-r-8 border-ourpurple text-justify text-xs sm:text-sm md:text-sm lg:text-[16px] backdrop-blur'>
                The accepted and presented papers of ICCST 2022 will be forwarded for possible inclusion in the IEEE Digital Xplore after review by IEEE.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Publication