'use client'
import useLink from '@/hooks/useLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const getLink = useLink()
  return (
    <footer className='w-full mt-10 bg-red-700 p-8'>
      <div className="container flex items-center justify-between">
        <Image src={'/img/logo.png'} width={120} height={120} alt='лого' ></Image>

        <div className="flex gap-4 items-center">
          {getLink.length > 0 ? getLink.map((item, index) => (

            <Link key={index} href={item.attributes?.href} className="rounded-full bg-red-900 w-8 h-8 flex items-center justify-center">
              <Image width={25} height={25} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt='Иконка' />
            </Link>
          )) : [1, 2, 3, 4].map((index) => <div key={index} className='w-8 h-8 rounded-full bg-red-900 animate-pulse' />)}
        </div>
      </div>
    </footer>
  )
}

export default Footer