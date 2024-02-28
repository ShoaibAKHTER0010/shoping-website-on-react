import React from 'react'

const Home = () => {
  return (
    <section className='w-full h-full lg:w-full sm:w-full flex flex-col md:flex-row lg:flex-row bg-[#EEDDCC] justify-between items-center gap-14 overflow-x-hidden'>
      <div className='sm:pl-14 mt-10 text-center md:text-left lg:text-left  md:pb-1 sm:mb-92'>
        <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-[50px] md:leading-[50px] lg:leading-[80px]">Find The Best <br /> Fashion Style <br /> For You</div>
        <div className="text-zinc-800 text-lg md:text-2xl lg:text-2xl font-normal font-['Poppins'] leading-[40.48px] md:leading-[50px] lg:leading-[50px]">Explore our curated collection of stylish <br />clothing and accessories tailored to your <br />
          unique taste.</div>
        <div className="w-[221px] h-[61px] px-[49px] bg-[#EEAD89] rounded-lg justify-center items-center gap-2.5 inline-flex my-10 hover:bg-[#DFBBA6] md:ml-0 ">
          <button className='text-black text-base md:text-lg lg:text-lg font-normal uppercase rounded-md'>Explore Now</button>
        </div>
      </div>

      <div className='lg:max-w-[380.58px] lg:max-h-[450.64px] md:max-w-[220.58px] w-full md:mb-8 sm:mx-16 '>
        <img src="./images/img-1.png" alt="img-1" className='w-full h-full ' />
      </div>
    </section>
  );
}

export default Home;
