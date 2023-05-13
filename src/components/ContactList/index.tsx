import React, { useState } from 'react'
import { fakeContacts } from '../../data/fakeContacts'
import MessageIcon from '../../statics/icons/MessageIcon'
import ThreeDots from '../../statics/icons/ThreeDots'
import placeholderImg from '../../statics/images/placeholderImg.png'
import './style.css'





const ContactList = () => {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(-1)

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
          fakeContacts.map((el, idx) => (
            <li className='contact_item'
              style={{
                background: active === idx ? 'var(--content-bg)' :
                  hover === idx ? 'var(--secondary-content-bg)' : ''
              }}
              onClick={() => setActive(idx)}
              onMouseMove={() => setHover(idx)}
            >
              <img className='contact_img' src={el.img} alt="" />
              <div className='contact_content'>
                <div className='contact_data'>
                  <h1 className='contact_name'>{el.contactName}</h1>
                  <p className='contact_lastmessage'>{el.lastMessage.length > 34 ? el.lastMessage.slice(0, 34) + '...' : el.lastMessage}</p>
                </div>
                <div className='contact_exdata'>
                  <p className='contact_lastmessage_time'>{el.lastMessageTime}</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ContactList