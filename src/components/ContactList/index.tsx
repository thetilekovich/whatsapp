import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import MessageIcon from '../../statics/icons/MessageIcon'
import ThreeDots from '../../statics/icons/ThreeDots'
import placeholderImg from '../../statics/images/placeholderImg.png'
import ContactListItem from '../ContactListItem'
import NewChatDropDown from '../dropdowns/NewChatDropdown'
import OptionDropdown from '../dropdowns/OptionDropdown'
import ProfileInfoDropdown from '../dropdowns/ProfileInfoDropdown'
import Loader from '../Loader'
import './style.css'





const ContactList = () => {
  const [optionDropdown, setOptionDropdown] = useState(false)
  const [newChatDropdown, setNewChatDropdown] = useState(false)
  const [profileDropdown, setProfileDropdown] = useState(false)
  const { chats, pendingUserChats } = useAppSelector(s => s.userDatas)


  return (

    <div className='contacts_list relative'>
      <div className='flex justify-between items-center bg-content py-1 px-3'>
        <button
          onClick={() => setProfileDropdown(prev => !prev)}>
          <img className='cursor-pointer w-14 rounded-full' src={placeholderImg} />
        </button>
        <nav className='flex items-center'>
          <button className='mx-5'
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
            optionDropdown ? <OptionDropdown setProfileDropdown={setProfileDropdown} /> : null
          }
        </div>
      </div>
      <div>

        {
          pendingUserChats ? <div className='h-[100vh] flex justify-center items-center'> <Loader /></div> :
            <ul className='h-[100vh] overflow-y-scroll mt-3'>
              {
                chats.map(el => (
                  <ContactListItem key={el.id} el={el} />
                ))
              }
            </ul>
        }

      </div>
      <div className={`dropdown_gen  ${newChatDropdown ? 'dropdown_gen_active' : ''}`}>
        <NewChatDropDown setCloseDrop={setNewChatDropdown} />
      </div>
      <div className={`dropdown_gen  ${profileDropdown ? 'dropdown_gen_active' : ''}`}>
        <ProfileInfoDropdown setCloseDrop={setProfileDropdown} />
      </div>
    </div>
  )
}

export default ContactList