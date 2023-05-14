import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setActiveChat } from '../../app/slices/InterfaceSlice'
import { accountChatsType } from '../../types'
import placeholder from '../../statics/images/placeholderImg.png'




const ContactListItem = ({ el }: { el: accountChatsType }) => {
    const [hover, setHover] = useState(false)
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const dispatch = useAppDispatch()

    return (
        <li key={el.id} className='px-4 flex items-center cursor-pointer'
            style={{
                background: activeChat === el.id ? 'var(--content-bg)' :
                    hover ? 'var(--secondary-content-bg)' : ''
            }}
            onClick={() => dispatch(setActiveChat(el.id))}
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img className='w-20 rounded-full mr-2' src={placeholder} alt="" />
            <div className='flex justify-between items-center py-7 px-2 w-full border-b border-content border-solid'>
                <div>
                    <h1 className='text-primary text-md font-medium'>{el.name.length > 30 ? el.name.slice(0,30) + '...': el.name}</h1>
                </div>
                {/* <div>
                    <p className='text-sm text-secondary'>{contactData?.lastSeen}</p>
                </div> */}
            </div>
        </li>
    )
}

export default ContactListItem