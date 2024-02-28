import React from 'react'
import { IoMdStar } from "react-icons/io";

const Product = () => {
  return (
    <section className='w-full h-full pt-12 overflow-x-hidden'>
        <div className='text-center '><h2 className='text-black text-[64px] font-bold'>Our products</h2>
        <div className='text-neutral-900 text-xl font-normal flex list-none justify-center gap-20 cursor-pointer '>
        <li className='hover:underline'>SALE</li>
        <li className='hover:underline'>HOT</li>
        <li className='hover:underline'>NEW ARRIVALS</li>
        <li className='hover:underline'>ACCESSORISE</li>
        </div>
        </div>

        <div className='grid grid-cols-4 pt-20 pl-14 gap-y-12 '>
            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-8.png" alt="img-8" className='w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Spread Collar Shirt
          <p>$110.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>5.0 <span  className='pt-1 '><IoMdStar className='text-yellow-500'/></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-9.png" alt="img-9" className='w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Printed T-shirt
          <p>$149.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>5.0 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-10.png" alt="img-10" className=' w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Gray Padded Jacket
          <p>$139.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.5 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-11.png" alt="img-11" className='w-full hover:rounded-full h-[310px]'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Spread Collar Shirt
          <p>$119.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.7 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-12.png" alt="img-12" className='h-[310px] w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Summer Wind Shirt
          <p>$99.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>3.9 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-13.png" alt="img-13" className='bg-[#D2B79E] h-[310px] w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Sun Shine half shirt
          <p>$.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.4 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-4.png" alt="img-14" className='bg-[#D2B79E] h-[310px] w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">White Solid Formal Shirt
          <p>$49.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>4.6 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

            <div className='hover:shadow-xl w-[270px] h-[400px] rounded-md'><img src="./images/img-15.png" alt="img-15" className='h-[310px] w-full hover:rounded-full'/><p className="text-center text-neutral-700 text-base font-semibold font-['Poppins'] lg:pt-10 md:pt-6">Tailored Jacket
          <p>$270.99
<button  className=' border-grey-500 border-l-2 pl-6 ml-6 inline-flex'>5.0 <span  className='pt-1 '><IoMdStar /></span></button></p></p></div>

        </div>
        
    </section>
  )
}

export default Product