import React from 'react'
import Image from 'next/image'
import Wrapper from './wrapper'
import Cards from './ICards'


const Jewellery = () => {
  return (
    <Wrapper>
      <div className='grid grid-cols-2 gap-5'> 
<div className='col-span-2 col-start-1 h-full w-full xl:col-start-2'>
  <h3 className='text-[2.5rem] sm:text-[2.75rem] tracking-[0.03em] leading-[3rem]'>
    Unique and Authentic Vintage Disigner Jewellery
  </h3>
</div>
      </div>
    </Wrapper>
  )
}

export default Jewellery;