import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import './style.css'
import { fakeContacts } from '../../data/fakeContacts'
import { contactsListType } from '../../types'
import ThreeDots from '../../statics/icons/ThreeDots'
import SendMessage from '../../statics/icons/SendMessage'
import ChatNotActive from '../../statics/icons/ChatNotActive'
import ChatOptionDropdown from '../dropdowns/ChatOptionDropdown'

const UserChat = () => {
  const [optionDropdown, setOptionDropdown] = useState(false)
  const { activeChat } = useAppSelector(s => s.userSlice)
  let activeContactChat = fakeContacts.filter(el => el.id === activeChat)

  return (
    activeContactChat[0] ?
      <div className='user_chat'>
        <header className='user_chat_header'>
          <div className='user_chat_contact'>
            <img src={activeContactChat[0]?.img} alt="" />
            <h1>{activeContactChat[0].contactName}</h1>
          </div>
          <button
            onClick={() => setOptionDropdown(prev => !prev)}
            className='user_chat_navigation_btn'>
            <ThreeDots />
          </button>
          <div
            onMouseLeave={() => setOptionDropdown(false)}
            className='chat_option_dropdown_gen'>
            {
              optionDropdown ? <ChatOptionDropdown /> : null
            }
          </div>
        </header>
        <section className='user_chat_body'>

        </section>
        <footer className='user_chat_footer'>
          <input type="text" />
          <button>
            <SendMessage />
          </button>
        </footer>
      </div> :
      <div className='user_chat_not_active'>
        <ChatNotActive />
        <article className='user_chat_not_active_content'>
          <h1>WhatsApp Web</h1>
          <p>Отправляйте и получайте сообщения без необходимости оставлять телефон <br /> подключенным.</p>
          <p>Используйте WhatsApp одновременно на четырех связанных устройствах и одном <br /> телефоне.</p>
        </article>
        <p>Защищено сквозным шифрованием</p>
      </div>
  )
}

export default UserChat