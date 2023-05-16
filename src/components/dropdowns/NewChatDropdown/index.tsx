import { useState } from 'react'
import { checkWhatsapp } from '../../../app/actions/checkWhatsapp'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setActiveChat, setInputValue } from '../../../app/slices/InterfaceSlice'
import ArrowPrev from '../../../statics/icons/ArrowPrev'
import Loader from '../../Loader'


const NewChatDropDown = ({ setNewChatDropdown }: { setNewChatDropdown: (a: boolean) => void }) => {
  const { newChatInputValue } = useAppSelector(s => s.InterfaceSlice)
  const [hasWhatsapp, setHasWhatsaap] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleClickSearch = async (phoneNumber: string) => {
    setLoading(true)
    if (phoneNumber.length > 10) {
      phoneNumber = phoneNumber.split('+').join('')
      const res = await checkWhatsapp(phoneNumber)
      setHasWhatsaap(await res)
      if (await hasWhatsapp) {
        setNewChatDropdown(false)
        dispatch(setActiveChat(phoneNumber + '@c.us'))
      } else {
        dispatch(setActiveChat('0'))
        setNewChatDropdown(true)
      }
    }
    setLoading(false)
  }


  return (
    <div className='h-full w-full overflow-hidden'>
      <header className='bg-content pt-10 pb-5 px-8 flex items-center'>
        <button
          onClick={() => setNewChatDropdown(false)}>
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
            className='bg-primary w-3/12 px-4 py-2 hover:bg-content duration-[0.4s] hover:text-primary'>{hasWhatsapp ? 'Написать' : 'Найти'}</button>
        </div>
        <div className='flex flex-col items-center justify-center  mt-14'>
          {
            hasWhatsapp || hasWhatsapp === null ? null : <h1 className='text-2xl text-red-600'>Number has not whatsapp</h1>
          }
          {
            hasWhatsapp ? <h1 className='text-2xl text-green-600'>Found!</h1> : null
          }
          {
            loading ? <Loader /> : null
          }
        </div>
      </section>
    </div>
  )
}

export default NewChatDropDown