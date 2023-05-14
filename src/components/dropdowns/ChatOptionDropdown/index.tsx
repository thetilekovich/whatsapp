import React from 'react'
import { logout } from '../../../app/actions/logout'
import { useAppDispatch } from '../../../app/hooks'
import { setActiveChat } from '../../../app/slices/InterfaceSlice'
import { setAuth } from '../../../app/slices/userSlice'
import './style.css'


const ChatOptionDropdown = () => {
  const dispatch = useAppDispatch()


  const handleClick = async () => {
    const isLogout = await logout()
    if (isLogout)
      dispatch(setAuth(false))
  }

  return (
    <nav className='bg-content text-primary py-3 rounded-md'>
      <ul className='option_dropdown cursor-pointer transition-[.2s] text-lg'>
        {/* <li>Данные контакта</li> */}
        <li
          onClick={() => dispatch(setActiveChat('0'))}
        >Закрыть чат</li>
        {/* <li>Без звука</li>
            <li>Очистить чат</li>
            <li>Удалить чат</li>
            <li>Заблокировать</li> */}
        <li
          onClick={handleClick}
        >Выйти</li>
      </ul>
    </nav>
  )
}

export default ChatOptionDropdown