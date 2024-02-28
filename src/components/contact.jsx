import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-full text-center pt-24 overflow-x-hidden '>
        <div className='bg-[#DBCCBF] rounded-full hover:shadow-xl justify-center  w-[700px] ml-80 -mb-4'>
            <h2 className='text-black text-[28px] font-bold p-4  '>Follow Us On Instagram @Fashion_World official</h2>
        </div>
        <div className='flex list-none justify-center gap-10 cursor-pointer text-white text-xl font-medium pb-36 pt-16  bg-stone-500'>
            <li className='hover:underline'>MEN</li>
            <li className='hover:underline'>WOMEN</li>
            <li className='hover:underline'>KIDS</li>
            <li className='hover:underline'>COLLECTION</li>
            <li className='hover:underline'>TRENDS</li>
        </div>
    </section>
  )
}

export default Contact