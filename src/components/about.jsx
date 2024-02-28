import React from 'react'

const About = () => {
  return (
    <section className='w-full h-full pt-24 flex gap-20 overflow-x-hidden'>
        <div className='pl-14'><img src="./images/img-5.png" alt="img-5" className='w-[475px] h-[595.01px]' /></div>

        <div className='w-[475px] h-{395.01px}'><h2 className='w-[506px] h-[172px] text-black text-[64px] font-bold capitalize leading-[80px]'>Best Fashion Since 2014</h2>
        <p className='pt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        <div className='flex gap-6 bg-[#D2B79E] text-center mt-52 py-2 '>
            <div><h2 className='w-[125px] h-[45px] text-black text-4xl font-black'> 2014</h2><p>Fifash Founded</p></div>
            <div><h2 className='w-[125px] h-[45px] text-black text-4xl font-black inline-flex'>89000 <span className='text-2xl pt-2 font-semibold'>+</span></h2><p >Product Sold</p></div>
            
            <div><h2 className='w-[125px] h-[45px] text-black text-4xl font-black inline-flex'> 31000 <span className='text-2xl pt-2 font-semibold'>+</span></h2><p >Best Reviews</p></div>
        </div></div>
       
    </section>
  )
}

export default About