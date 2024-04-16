import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='w-full' id='contact'>
      <div className='container'>
        <h2 className='text-center font-bold text-4xl text-red-700 pt-5'>Контакты</h2>
        <div className='max-w-screen-xl  flex justify-center flex-col'>
          <p className=" text-left pt-10 text-slate-600 text-4xl">Мы на находимся по адресу:<br />Пушкина 21 </p>
          <p className=" text-left pt-10 text-slate-600 text-xl">Наш номер телефона: +77777777777</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
