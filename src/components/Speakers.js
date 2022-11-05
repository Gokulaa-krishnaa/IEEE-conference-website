import React from 'react'
import profile from "../images/images.png"
import sampathprofile from "../images/sampathprofile.jpg"
import sudhakarprofile from "../images/sudhakarprofile.jpg"
import keeyokayhoiprofile from "../images/keeyokayhoiprofile.jpg"
import gomathiprofile from "../images/gomathiprofile.jpg"
import mathiprofile from "../images/mathiprofile.jpg"
import sundarprofile from "../images/sundarprofile.jpg"
import elangoprofile from "../images/elangoprofile.jpg"
function Speakers() {
  return (
    <div id="speakerid">
        <div>
            <div className='duration-500 scale-100 hover:scale-105'><h1 className= 'text-center py-10'><span className='bg-ourpurple text-white hover:text-gray-200 font-bold rounded-xl px-8 py-2 text-lg lg:text-2xl'>SPEAKERS</span></h1></div>
        </div>
        <div className='grid grid-rows gap-4 mx-20 sm:mx-30 md:mx-40 lg:mx-40 py-10 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 rounded-3xl p-5'>
            <div className='grid grid-cols-1 text-xs sm:grid-cols-2 sm:text-sm md:grid-cols-2 md:text-sm lg:grid-cols-3 lg:text-[16px]'>
                <div className="text-center p-8">
                    <img src={sampathprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full " width="50" height="50"></img>
                        <b>Mr. SampathKumar Veeraraghavan</b><br></br>
                        Global Chair, <br></br>
                        IEEE Humanitarian Activities Committee,<br></br>
                        Senior Technical Program management Leader,<br></br> 
                        AWS, USA
                </div>
                <div className='text-center p-8'>
                    <img src={sudhakarprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Dr.TATA SUDHAKAR,</b><br></br>
                    Scientist G HEAD - OOS <br></br>
                    NIOT, Chennai <br></br>
                    Tamil Nadu, India
                    
                </div>
                <div className='text-center p-8'>
                    <img src={keeyokayhoiprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Dr. Keoy Kay Hooi</b><br></br>
                    Director, Insititute of Computer Science <br></br>
                    and Digital Innovation,<br></br>
                    USCI University, <br></br> 
                    Kuala Lumpur, Malaysia <br></br>
                   
                </div>
                <div className='text-center p-8'>
                    <img src={gomathiprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Dr. V. Gomathi</b><br></br>
                    Professor and Head, Department of CSE, <br></br>
                    National Engineering College, Kovilpatti, Tamilnadu, <br></br>
                    Chairman, IEEE Information Theory Society, <br></br>
                    IEEE Madras Section
                    
                </div>
                <div className='text-center p-8'>
                    <img src={sundarprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Dr. R Sundar</b><br></br>
                    Scientist, NIOT, <br></br>
                    Chennai, <br></br>
                    Tamil Nadu, India
                </div>
                <div className='text-center px-8 pt-8'>
                    <img src={mathiprofile}  className="w-9/12 md:w-full m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Ms MATHI JEYAKARAN JAYARAJ,</b><br></br>
                    Director, IT, <br></br>
                    UBS, Chennai, <br></br>
                    India
                </div>
            </div>
            <div className='grid grid-cols-1 text-xs sm:text-sm  md:text-sm lg:text-[16px]'>
                <div className='text-center px-8'>
                    <img src={elangoprofile}  className="w-9/12  m-auto sm:w-5/12 lg:w-4/12 m-auto p-2 sm:p-8 lg:p-10 rounded-full" width="50" height="50"></img>
                    <b>Dr. N Elango </b><br></br>
                    Associate Professor, Faculty of Engineering, <br></br>
                    Technology and Build Environment, <br></br>
                    USCI University, <br></br>
                    Kuala Lumpur, Malaysia
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Speakers