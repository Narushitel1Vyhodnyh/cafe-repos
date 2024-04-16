'use client'
import useMenu from '@/hooks/useMenu'
import Image from 'next/image'
import React from 'react'



const Menu = () => {
    const getMenu = useMenu()
    return (
        <section className='w-full pt-5' id='menu'>
            <div className="container">
                <h3 className='text-center text-4xl text-red-700 font-bold'>Меню</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getMenu.length > 0 ? getMenu.map((item, index) => (

                        <div key={index} className="w-full h-[300px] overflow-hidden rounded-xl px-3 py-5 bg-red-700/50 flex flex-col items-center justify-between">
                            <Image className='' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} width={500} height={500} alt='Картинка товара' />
                            <h4 className='text-2xl text-white text-center mb-2'>{item.attributes?.title}</h4>
                            <p className='text-xl text-white'>{item.attributes?.descr > 128 ? item.attributes?.descr.slice(0, 128) + '...' : item.attributes?.descr
                            }
                            </p>
                        </div>
                    )) : [1, 2, 3, 4].map((index) => <div className='w-full h-[200px] md:h-[240px] rounded-xl bg-red-700/50 animate-pulse' key={index} />)}
                </div>
            </div>
        </section >
    )
}

export default Menu