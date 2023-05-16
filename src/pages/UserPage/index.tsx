import { useEffect } from 'react'
import { getAccountChats } from '../../app/actions/getAccountChats'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ContactList from '../../components/ContactList'
import LaptopUserChat from '../../components/UserChat/LaptopUserChat'
import MobileUserChat from '../../components/UserChat/MobileUserChat'
import './style.css'

const UserPage = () => {
  const dispatch = useAppDispatch()
  const {chats} = useAppSelector(s => s.userDatas)

  async function getChats(){
    await dispatch(getAccountChats())
    if(chats){
      setTimeout(() => getChats(), 2000)
    }
    return
  }


  useEffect(() => {
    getChats()
  }, [])

  return (
    <div className='bg-body '>
      <div className='m-auto'>
        <div className='laptop_screen hidden md:grid'>
          <ContactList />
          <LaptopUserChat />
        </div>
        <div className='mobile-screen block md:hidden'>
          <ContactList />
          <MobileUserChat />
        </div>
      </div>
    </div>
  )
}

export default UserPage