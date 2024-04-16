import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="bg-red-700 pb-3">
        <div className="container items-center justify-between flex ml-auto mr-auto pl-16px pr-16px">
              <img className='w-24 mt-1' src="\img\logo.png" alt="" />
          <ul className='items-center pb-10  flex gap-12 text-white pt-10'>
            <li>
            </li>
            <li className=''>
              <Link className='text-xl font-bold ' href="Главная">Главная</Link>
            </li>
            <li>
              <Link className='text-xl font-bold' href="О нас">О нас</Link>
            </li>
            <li>
              <Link className='text-xl font-bold' href="Меню">Меню</Link>
            </li>
            <li>
              <Link className='text-xl font-bold' href="Контакты">Контакты</Link>
            </li>
          </ul>
          <ul>
            <li className=''>
              <button className=' bg-red-900 text-orange-50 p-1.5 rounded-md'>Заказать доставку</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
