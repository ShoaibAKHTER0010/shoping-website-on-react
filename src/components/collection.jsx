import React from 'react'
import { IoMdStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const Collection = () => {
  return (
    <section className='w-full h-full lg:w-full justify-center text-center items-center overflow-x-hidden'>
        <div className='lg:pt-24 sm:pt-14 md:pt-16'><h2 className="  text-center text-black text-[64px] lg:font-semibold md:font-medium sm:font-light sm:text-4xl md:text-5xl lg:text-6xl font-['Poppins'] capitalize">New Collection</h2> 
        <p className="text-black lg:text-2xl sm:text-xl  font-normal font-['Frank Ruhl Libre'] capitalize">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>

        <div className='flex justify-center lg:pt-18 md:pt-16 sm:pt-12 md:gap-1 md:flex-row  lg:gap-14 sm:gap-4  sm:flex-col '>
        <div><div className='bg-[#EEDDCC] lg:w-[370px] lg:h-[416px] md:w-[250px] md:h-[280px]'><img src="./images/img-3.png" alt="img-2"  className='md:h-[280px] lg:w-[406px] lg:h-[416px]'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Regular Fit Long Sleeve Top
          <p>$49.99
<button className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.9 <span  className='pt-1'><IoMdStar /></span></button></p></p> </div></div>
          <div><div className='bg-[#EEDDCC] lg:w-[370px] lg:h-[416px] md:w-[250px] md:h-[280px]'><img src="./images/img-2.png" alt="img-3"  className='md:h-[280px] lg:w-[406px] lg:h-[416px]'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Black Crop Tailored Jacket
          <p>$46.99
<button className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.9 <span  className='pt-1'><IoMdStar /></span></button></p></p> </div></div>
          <div><div className='bg-[#8B6E5A] lg:w-[370px] lg:h-[416px] md:w-[250px] md:h-[280px]'><img src="./images/img-4.png" alt="img-4" className='md:h-[280px] lg:w-[406px] lg:h-[416px]' /><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Textured Sunset Shirt
          <p>$42.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>5.0 <span  className='pt-1 '><IoMdStar /></span></button></p></p> </div></div>
        </div>
        <div className='  justify-center lg:pt-28 md:pt-20 sm:pt-16 '><button className='w-[142px] h-[40px] bg-[#D2B79E] inline-flex py-2 my-6 pl-9 hover:bg-[#DFBBA6] rounded-[3px] hover:gap-5'>see all <span className='pt-2 pl-3 '><FaArrowRightLong /></span></button></div>
       
    </section>
  )
}

export default Collection