import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setInputValue } from '../../../app/slices/InterfaceSlice'
import ArrowPrev from '../../../statics/icons/ArrowPrev'


const NewChatDropDown = ({ setCloseDrop }: { setCloseDrop: (a: boolean) => void }) => {
  const { newChatInputValue } = useAppSelector(s => s.InterfaceSlice)
  const dispatch = useAppDispatch()

  const handleClickSearch = (phoneNumber: string) => {
    if (phoneNumber.length > 10) {
      if (phoneNumber.split('')[0] === '+') {
        phoneNumber = phoneNumber.slice(1, -1)
      } else {
        
      }
    }
  }


  return (
    <div className='h-full w-full overflow-hidden'>
      <header className='bg-content pt-10 pb-5 px-8 flex items-center'>
        <button
          onClick={() => setCloseDrop(false)}>
          <ArrowPrev />
        </button>
        <h1 className='text-primary text-2xl font-medium mx-5'>Новый чат</h1>
      </header>
      <section className='bg-body h-full flex flex-col px-5 justify-start items-center pt-20'>
        <h1 className='text-primary text-xl text-center mb-20'>Напишите номер телефона с кодом страны и чтобы начать новый чат</h1>
        <div className='w-full'>
          <input
            onChange={(el) => dispatch(setInputValue(el.target.value))}
            className='bg-primary w-9/12 px-4 py-2' value={newChatInputValue} type="tel" />
          <button
            onClick={() => handleClickSearch(newChatInputValue)}
            className='bg-primary w-3/12 px-4 py-2 hover:bg-content duration-[0.4s] hover:text-primary'>Найти</button>
        </div>
      </section>
    </div>
  )
}

export default NewChatDropDown