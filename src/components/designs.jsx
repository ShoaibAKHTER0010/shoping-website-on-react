import React from 'react'

const Designs = () => {
  return (
    <section className='w-full h-full pt-24 overflow-x-hidden'>
        <div className='text-center'>
            <h2 className='text-zinc-900 text-[64px] font-medium'>Designer Clothes For You</h2>
             <p className='text-zinc-700 text-xl font-medium'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
        </div>

        <div className='flex gap-6 justify-center pt-16'>
            <div ><img src="./images/img-17.png" alt="img-17"  className='bg-[#D3E2D7] w-[400px] h-[527px] hover:shadow-xl'/>
        <div className='pt-20'>
            <h2 className='text-center text-neutral-700 text-[28px] font-semibold '>Accessories</h2>
            <p className='w-[392.04px] text-center text-zinc-600 text-xl font-medium pt-4'>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
            </div>
        </div>

        <div className=''><img src="./images/img-18.png" alt="img-18" className='w-[400px] h-[527px] hover:shadow-xl'/>
        <div className='pt-20'>
            <h2 className='text-center text-neutral-700 text-[28px] font-semibold '>Dresses</h2>
            <p className='w-[392.04px] text-center text-zinc-600 text-xl font-medium pt-4'>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
            </div>
        </div>

        <div className=''><img src="./images/img-19.png" alt="img-19" className='w-[400px] h-[527px] hover:shadow-xl'/>
        <div className='pt-20'>
            <h2 className='text-center text-neutral-700 text-[28px] font-semibold '>Outerwear</h2>
            <p className='w-[392.04px] text-center text-zinc-600 text-xl font-medium pt-4'>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
            </div>
        </div></div>
    </section>
  )
}

export default Designs