import React from 'react'
import './style.css'

const OptionDropdown = () => {
  return (
    <nav className='option_dropdown'>
        <ul className='option_dropdown_list'>
            <li>Новая группа</li>
            <li>Профиль</li>
            <li>Избранные сообщения</li>
            <li>Настройки</li>
            <li>Выйти</li>
        </ul>
    </nav>
  )
}

export default OptionDropdown