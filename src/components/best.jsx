import React from 'react'
import { IoMdStar } from "react-icons/io";

const Best = () => {
  return (
    <section className='w-full h-full mt-20 py-14 flex bg-[#D2B79E] gap-32 overflow-x-hidden'>
        <div className='w-[475px] h-{395.01px} pl-14'><h2 className=' text-black text-[64px] font-bold w-[506px] h-[172px] leading-[80px]'>Best Seller Product </h2><p>We have seen sustainable fashion becoming increasingly popular over the years and we know that this will be here to stay in 2024. Keep an eye out for brands that use sustainable fabrics and don’t be afraid to dip into the world of of vintage clothing.
</p><button className='bg-[#EEDDCC] w-[120px] [h-50px] text-center mt-12 hover:bg-[#D2B79E] hover:border-black hover:border-2'>LOGIN</button></div>

        <div className='flex gap-12'>
          <div className='bg-white rounded-md hover:shadow-xl'><img src="./images/img-6.png" alt="img-6" /><div className='pt-2 pl-4'><span className='flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span><p className='text-black text-xl font-semibold'>Pastel Langue Sleeve</p><span className='text-slate-500 line-through'>$220</span><span className='pl-2'>$180</span></div></div>

        <div className='bg-white rounded-md hover:shadow-xl'><img src="./images/img-7.png" alt="img-7" /><div className='pt-2 pl-4'><span className='flex'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span><p className='text-black text-xl font-semibold'>Pastel Langue Sleeve</p><span className=' text-slate-500 line-through'>$230</span><span className='pl-2 '>$190</span></div></div></div>
    </section>
  )
}

export default Best