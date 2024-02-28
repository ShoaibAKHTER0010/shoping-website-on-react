import React from 'react'

const Reviews = () => {
  return (
    <section className='w-full h-full  pt-24 justify-center overflow-x-hidden '>
        <h2 className=' text-stone-900 text-[64px] font-medium text-center '>What our customer <br />say about as</h2>

       <div className='flex justify-center pt-12 gap-4'>  
       <div className='bg-[#DBCCBF] p-8 rounded-lg'>
            <h2 className='w-[350.50px] text-center text-black text-2xl font-semibold  capitalize'>Amet minim mollit non deserunt ullamco </h2>
            <p className='w-[350px] h-[120px] text-center text-zinc-600 text-xl font-normal '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
           <div className='pl-20 '> <img src="./images/img-20.png" alt="" className='hover:ml-2'/></div>
        </div>

        <div className='bg-[#DBCCBF] p-8 hover:shadow-2xl rounded-lg'>
            <h2 className='w-[350.50px] text-center text-black text-2xl font-semibold  capitalize'>Amet minim mollit non deserunt ullamco </h2>
            <p className='w-[350px] h-[120px] text-center text-zinc-600 text-xl font-normal '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div className='pl-20'> <img src="./images/img-20.png" alt="" className='hover:ml-2'/></div>
        </div>

        <div className='bg-[#DBCCBF] p-8 rounded-lg'>
            <h2 className='w-[350.50px] text-center text-black text-2xl font-semibold  capitalize'>Amet minim mollit non deserunt ullamco </h2>
            <p className='w-[350px] h-[120px] text-center text-zinc-600 text-xl font-normal '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div className='pl-20'> <img src="./images/img-20.png" alt="" className='hover:ml-2'/></div>
        </div></div>
      
    </section>
  )
}

export default Reviews