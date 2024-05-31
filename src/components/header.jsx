import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <section className='w-full overflow-x-hidden lg:w-full bg-[#EEDDCC] sm:overflow-hidden '>
      <div className='w-full flex flex-col md:flex-row justify-between px-4 sm:p-3 sm:ml-14 '>
        <div className="text-stone-800 text-3xl font-bold font-Poppins tracking-tight hover:text-green-800">Style</div>

        <div className='flex flex-col md:flex-row text-black text-xl font-medium list-none py-2  hover:cursor-pointer md:gap-10 sm:gap-2 lg:gap-12'>
          <li className='hover:underline'>SHOP</li>
          <li className='hover:underline'>HOME</li>
          <li className='hover:underline'>FEATURES</li>
          <li className='hover:underline'>CONTACT</li>
        </div>

        <div className='flex md:flex-row gap-2 md:gap-6 lg:gap-16 sm:flex-col '>
          <button className='py-2 font-extralight text-3xl cursor-pointer hover:text-[#EEAD89] hover:text-2xl'><MdOutlineShoppingBag /></button>
          <button className="text-black text-xl font-medium font-Poppins uppercase rounded-[3px] border-2 border-black w-[142px] h-[40px] md:mr-28 hover:bg-[#DFBBA6]  md:{w-100px},h-[34px] sm:w-100vw">LOGIN</button>
        </div>
      </div>
    </section>
  );
}

export default Header;