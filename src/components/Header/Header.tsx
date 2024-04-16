'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../NavBar/NavBar'
import NavBarMobile from '../NavBarMobile/NavBarMobile'
// import Logo from 
const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <header>
      <nav className="bg-red-700 pb-3">
        <div className="container items-center justify-between flex ml-auto mr-auto pl-16px pr-16px">
          <Image className='w-24 mt-1' src={'/img/logo.png'} width={100} height={100} alt="" />
          <Navbar openModal={openModal} openModalClick={() => setOpenModal(!openModal)} />
          <NavBarMobile openModal={openModal} openModalClick={() => setOpenModal(!openModal)} />
        </div>
      </nav>

    </header>
  )
}

export default Header
