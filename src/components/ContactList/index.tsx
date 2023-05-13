import React, { useState } from 'react'
import { fakeContacts } from '../../data/fakeContacts'
import MessageIcon from '../../statics/icons/MessageIcon'
import ThreeDots from '../../statics/icons/ThreeDots'
import placeholderImg from '../../statics/images/placeholderImg.png'
import ContactListItem from '../ContactListItem'
import './style.css'





const ContactList = () => {

  return (
    <div className='contacts_list'>
      <div className='contacts_header'>
        <div className='contacts_header_profile'>
          <img className='header_profile_img' src={placeholderImg} />
        </div>
        <nav className='contacts_navigations'>
          <button >
            <MessageIcon />
          </button>
          <button>
            <ThreeDots />
          </button>
        </nav>
      </div>
      <ul className='contacts_body'>
        {
          fakeContacts.map(el => (
            <ContactListItem el={el}/>
          ))
        }
      </ul>
    </div>
  )
}

export default ContactList