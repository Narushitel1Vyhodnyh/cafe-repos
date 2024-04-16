'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const Navbar = ({ openModalClick, openModal }: { openModalClick: () => void, openModal: boolean }) => {

    return (
        <>
            
            <ul className='items-center pb-10  hidden md:flex gap-12 text-white pt-10'>
                <li className=''>
                    <Link className='text-xl font-bold ' href={'/'}>Главная</Link>
                </li>
                <li>
                    <Link className='text-xl font-bold' href={'#about'}>О нас</Link>
                </li>
                <li>
                    <Link className='text-xl font-bold' href={'#menu'}>Меню</Link>
                </li>
                <li>
                    <Link className='text-xl font-bold' href={'#contact'}>Контакты</Link>
                </li>
            </ul>
            <ul className='hidden md:block'>
                <li className=''>
                    <button onClick={openModalClick} className=' bg-red-900 text-orange-50 p-1.5 rounded-md'>Заказать доставку</button>
                </li>
            </ul>
            {openModal && <Modal closeModal={openModalClick} />}

        </>
    )
}

export default Navbar