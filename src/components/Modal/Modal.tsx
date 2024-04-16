'use client'
import React from 'react'

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className='w-full h-full fixed t-0 left-0 right-0 bottom-0 bg-red-700/70 flex items-center justify-center'>
      <div className="bg-red-700 w-[500px] rounded-md px-8 py-5 ">
        <div className="flex justify-end">
          <button onClick={closeModal} className='text-white w-6 h-6'>X</button>
        </div>

        <form className='flex flex-col item-start justify-start gap-1' action="">
          <input className='py-4 px-6 bg-transparent outline-none text-white placeholder:text-white/50' type="tel" placeholder='Введите телефон' />
          <button className='p-4 bg-red-800 text-white'>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Modal