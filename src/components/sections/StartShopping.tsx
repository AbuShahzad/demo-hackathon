
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const StartShopping = () => {
  return (
    <button
      type="button"
      className="flex items-center bg-[#212121] text-white rounded-none py-3 px-8"
      onClick={() => ("/")}
    >
      <AiOutlineShoppingCart className="mr-2" size={25} />
      Start Shopping
    </button>
  );
};

export default StartShopping;