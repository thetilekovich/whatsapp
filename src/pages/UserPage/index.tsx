import { useEffect } from 'react'
import { getAccountChats } from '../../app/actions/getAccountChats'
import { useAppDispatch } from '../../app/hooks'
import ContactList from '../../components/ContactList'
import LaptopUserChat from '../../components/UserChat/LaptopUserChat'
import MobileUserChat from '../../components/UserChat/MobileUserChat'
import './style.css'

const UserPage = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getAccountChats())
  }, [])

  return (
    <div className='bg-body'>
      <div className='m-auto'>
        <div className='laptop_screen hidden md:grid'>
          <ContactList />
          <LaptopUserChat />
        </div>
        <div className='block md:hidden'>
          <ContactList />
          <MobileUserChat />
        </div>
      </div>
    </div>
  )
}

export default UserPage