'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Modal from '../Modal/Modal'
FaBars

const NavBarMobile = ({openModalClick, openModal}: {openModalClick: () => void, openModal: boolean}) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <button onClick={() => setOpenMenu(!openMenu)} className='mt-4 w-[35px] h-[35px] bg-red-800 hover:bg-red-900 flex md:hidden items-center justify-center rounded-md text-white'><FaBars /></button>
            {openMenu && (<div className='absolute left-0 right-0 top-[110px] bg-red-700 pb-4'>
                <ul className=' text-white pt-10 flex flex-col items-start gap-4 pl-4'>
                    <li className=''>
                        <Link className='text-xl font-bold ' href={'/'}>Главная</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-bold' href={'/'}>О нас</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-bold' href={'/'}>Меню</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-bold' href={'/'}>Контакты</Link>
                    </li>
                </ul>
                <ul className='mt-4'>
                    <li className=''>
                        <button onClick={openModalClick} className=' bg-red-900 text-orange-50 p-1.5 rounded-md w-full'>Заказать доставку</button>
                    </li>
                </ul>
                {openModal && <Modal closeModal={openModalClick} />}
            </div>)}
        </>
    )
}

export default NavBarMobile