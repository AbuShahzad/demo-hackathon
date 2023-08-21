
import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <Link href={"/"}>Female</Link>
      <Link href={"/"}>Male</Link>
      <Link href={"/"}>Kids</Link>
      <Link href={"/"}>All Products</Link>
    </div>
  )
}

export default Menu;