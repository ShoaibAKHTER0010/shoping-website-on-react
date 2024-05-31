import React from 'react'

const Deals = () => {
  return (
    <section className='w-full h-full bg-[#EEDDCC] flex mt-32 gap-16 justify-center overflow-x-hidden'>
        <div className=' w-[561px] h-[684.23px] relative -mt-20 mr-24'><img src="./images/img-16.png" alt="" className=''/></div>
        <div className=' w-[561px] pt-20'><h2 className='w-[626px] text-black text-[64px] font-medium'>Deal of The Day</h2><p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, harum, necessitatibus tempore minima temporibus nostrum quos. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div className='flex gap-6 pt-16'>
          <div className='w-[95px] h-[85px] bg-stone-500 border-2 border-black text-center hover:text-white'><h2 className=' text-black text-4xl font-black '>03</h2><span className=' font-semibold'>Day</span></div>
          <div className='w-[95px] h-[85px] bg-stone-500 border-2 border-black text-center hover:text-white'><h2 className=' text-black text-4xl font-black '>08</h2><span className=' font-semibold'>Hour</span></div>
          <div className='w-[95px] h-[85px] bg-stone-500 border-2 border-black text-center hover:text-white'><h2 className=' text-black text-4xl font-black'>09</h2><span className=' font-semibold'>Minute</span></div>
        </div>
        <button className='w-[162px] h-[50px] bg-stone-900 rounded-lg justify-center items-center gap-2.5 text-white mt-14 hover:border-2 hover:border-red-400'>START</button>
        </div>
    </section>
  )
}

export default Deals