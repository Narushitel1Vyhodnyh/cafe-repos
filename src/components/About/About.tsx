import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='w-full ' id='about'>
      
      <div className='bg-[url(/img/About_bg.jpg)] bg-no-repeat bg-cover pb-96'>
        <h1 className='text-white text-center font-semibold bg-red-600/50 text-2xl'>Добро пожаловать в Волшебный Вареник Бабы Яги</h1>
      </div>
      <div className="container">
        <h2 className='text-center text-3xl pt-5 font-bold text-red-700'>О Нас</h2>
        <p className='text-center pt-5 text-3xl  pr-28 pl-28'>Ресторан русской кухни "Волшебный Вареник Бабы Яги" был открыт несколько лет назад в сказочном городе, окруженном зелеными лесами и голубыми озерами. Владельцы ресторана, братья Артем и вадим(лошара), приобрели уединенное место для своего ресторана после того, как они наткнулись на старую загадочную рукопись, которая принадлежала самой Бабе Яге.

          Они прочли о колдовстве и тайнах старых славянских рецептов, которые спрятались в глубине леса. Решив создать что-то уникальное, они переняли несколько рецептов у Бабы Яги и создали ресторан "Волшебный Вареник Бабы Яги", где на столах появились самые волшебные и аутентичные блюда русской кухни.

          Каждый посетитель ресторана встречается с беседками на крыше ресторана и цветущими рябиновыми деревьями, создавая впечатление, что они волшебной и удивительной русской сказке. Кроме того, самое главное, что можно найти в это ресторане - это лучшие вареники, приготовленные по тем секретным рецептам, которые раньше не видели света. Гости ресторана утверждают, что при посещении "Волшебного Вареника Бабы Яги" можно почувствовать волшебство старинной Руси и полакомиться блюдами, которые пробудят каждого из них внутреннего деда Мороза или Бабушку Ягу.
        </p>
      </div>
    </section>
  )
}

export default About