import React, { useState } from 'react'
import { fakeContacts } from '../../data/fakeContacts'
import MessageIcon from '../../statics/icons/MessageIcon'
import ThreeDots from '../../statics/icons/ThreeDots'
import placeholderImg from '../../statics/images/placeholderImg.png'
import ContactListItem from '../ContactListItem'
import NewChatDropDown from '../dropdowns/NewChatDropdown'
import OptionDropdown from '../dropdowns/OptionDropdown'
import './style.css'





const ContactList = () => {
  const [optionDropdown, setOptionDropdown] = useState(false)
  const [newChatDropdown, setNewChatDropdown] = useState(false)


  return (
    <div className='contacts_list'>
      <div className='contacts_header'>
        <div className='contacts_header_profile'>
          <img className='header_profile_img' src={placeholderImg} />
        </div>
        <nav className='contacts_navigations'>
          <button
            onClick={() => setNewChatDropdown(prev => !prev)}>
            <MessageIcon />
          </button>
          <button
            onClick={() => setOptionDropdown(prev => !prev)}>
            <ThreeDots />
          </button>
        </nav>
        <div
          onMouseLeave={() => setOptionDropdown(false)}
          className='option_dropdown_gen'>
          {
            optionDropdown ? <OptionDropdown /> : null
          }
        </div>
      </div>
      <ul className='contacts_body'>
        {
          fakeContacts.map(el => (
            <ContactListItem el={el} />
          ))
        }
      </ul>
      <div className={`${newChatDropdown ? 'newchat_dropdown_gen' : ''}`}>
        <NewChatDropDown />
      </div>

    </div>
  )
}

export default ContactList