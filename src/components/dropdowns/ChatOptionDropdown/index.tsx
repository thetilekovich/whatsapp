import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { setActiveChat } from '../../../app/slices/userSlice'
import './style.css'


const ChatOptionDropdown = () => {
    const dispatch = useAppDispatch()
  return (
    <nav className='chat_option_dropdown'>
        <ul className='chat_option_dropdown_list'>
            <li>Данные контакта</li>
            <li
            onClick={() => dispatch(setActiveChat('-1'))}
            >Закрыть чат</li>
            <li>Без звука</li>
            <li>Очистить чат</li>
            <li>Удалить чат</li>
            <li>Заблокировать</li>
            <li>Выйти</li>
        </ul>
    </nav>
  )
}

export default ChatOptionDropdown