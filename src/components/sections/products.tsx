import Swiperslider from './swiperslider';
import Wrapper from './wrapper'

const ProductsFromSanity = () => {
  return (
<Wrapper> 
  <div className='flex flex-col justify-center items-center px-5 py-20'>
    <p className="text-center uppercase tracking-wide text-[#2118FF]">PRODUCTS</p>
    <h3 className='text-center my-8'>Check What We Have</h3>

    <div className='w-full mx-auto'>
      <Swiperslider />

    </div>
  </div>
  
</Wrapper> )
}

export default ProductsFromSanity;