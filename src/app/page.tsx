import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import Hero from '@/components/sections/hero';
import Promotions from '@/components/sections/promotions';
import Products from '@/components/sections/products';
import Jewellery from '@/components/sections/jewelry';

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
      <Jewellery /> 


    </main>
  );
}
