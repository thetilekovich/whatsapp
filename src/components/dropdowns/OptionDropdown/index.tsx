import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../../app/slices/userSlice'
import './style.css'

const OptionDropdown = ({setProfileDropdown}: {setProfileDropdown: (a: boolean) => void}) => {
  const dispatch = useDispatch()
  return (
    <nav className='option_dropdown'>
        <ul className='option_dropdown_list'>
            <li>Новая группа</li>
            <li
            onClick={() => setProfileDropdown(true)}
            >Профиль</li>
            <li>Избранные сообщения</li>
            <li>Настройки</li>
            <li
            onClick={() => dispatch(setAuth(false))}
            >Выйти</li>
        </ul>
    </nav>
  )
}

export default OptionDropdown