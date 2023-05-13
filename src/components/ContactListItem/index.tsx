import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setActiveChat } from '../../app/slices/userSlice'
import { contactsListType } from '../../types'

const ContactListItem = ({ el }: { el: contactsListType }) => {
    const [hover, setHover] = useState(false)
    const { activeChat } = useAppSelector(s => s.userSlice)
    const dispatch = useAppDispatch()

    return (
        <li key={el.id} className='contact_item'
            style={{
                background: activeChat === el.id ? 'var(--content-bg)' :
                    hover ? 'var(--secondary-content-bg)' : ''
            }}
            onClick={() => dispatch(setActiveChat(el.id))}
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
        </li>)
}

export default ContactListItem