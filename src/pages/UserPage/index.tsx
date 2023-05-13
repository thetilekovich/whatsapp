import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import ContactList from '../../components/ContactList'
import UserChat from '../../components/UserChat'
import './style.css'

const UserPage = () => {
  return (
    <div className='loggedIn_gen'>
        <div className='loggedIn_container'>
            <ContactList/>
            <UserChat/>
        </div>
    </div>
  )
}

export default UserPage