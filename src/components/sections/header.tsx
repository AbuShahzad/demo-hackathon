

import Link from 'next/link'
import React from 'react'
import {
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiOutlineMenu,
  } from "react-icons/ai";

import Image from 'next/image'
import logo from '../../public/logo.webp'
import Menu from './Menu'

const Navbar = () => {
  return (
   <nav>
 {/* Large Srceen */}
 <div className="flex justify-between items-center w-full h-20 lg:px-20 px-5 max-w-[1240px] mx-auto"> 
        <div> 
          <Link href={"/"}>
            <Image src="/logo.webp" alt="" width={150} height={150} />
          </Link>
        </div>
        <div className="hidden lg:block">
        <Menu />
        </div>
        <div className="border border-gray-300 rounded-md px-2 bg-white hidden lg:flex items-center w-[30%]">
          <AiOutlineSearch size={15} />
          <input
            type="text"
            placeholder="What you looking for"
            className="outline-none ml-1"
          />
        </div>

        <div className="w-10 h-10 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute left-7 bottom-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
               0
              </span>
            </div>

</div>
    </nav>
  )
}

export default Navbar