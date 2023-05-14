import { useDispatch } from 'react-redux'
import { logout } from '../../../app/actions/logout'
import { setAuth } from '../../../app/slices/userSlice'
import './style.css'

const OptionDropdown = ({setProfileDropdown}: {setProfileDropdown: (a: boolean) => void}) => {
  const dispatch = useDispatch()

  const handleClickLogout = async () => {
    const isLogout = await logout()
    if (isLogout)
      dispatch(setAuth(false))
  }


  return (
    <nav className='bg-content text-primary py-3 rounded-md'>
        <ul className='option_dropdown cursor-pointer transition-[0.2s] text-lg'>
            {/* <li>Новая группа</li> */}
            <li
            onClick={() => setProfileDropdown(true)}
            >Профиль</li>
            {/* <li>Избранные сообщения</li> */}
            {/* <li>Настройки</li> */}
            <li
            onClick={handleClickLogout}
            >Выйти</li>
        </ul>
    </nav>
  )
}

export default OptionDropdown