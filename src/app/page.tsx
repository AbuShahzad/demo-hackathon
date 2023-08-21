import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import Hero from '@/components/sections/hero';
import Promotions from '@/components/sections/promotions';


export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />


    </main>
  );
}
