import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './style.css'
import ThreeDots from '../../statics/icons/ThreeDots'
import ChatOptionDropdown from '../dropdowns/ChatOptionDropdown'
import placeholder from '../../statics/images/placeholderImg.png'
import UserChatFooter from '../UserChatFooter'
import { setActiveChat } from '../../app/slices/InterfaceSlice'
import ArrowPrev from '../../statics/icons/ArrowPrev'
import UserChatBody from '../UserChatBody'



const MobileUserChat = () => {
    const [optionDropdown, setOptionDropdown] = useState(false)
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const { chats } = useAppSelector(s => s.userDatas)
    const dispatch = useAppDispatch()
    let activeContactChat = chats.filter(el => el.id === activeChat)


    return (
        <div className={`absolute w-full h-full -right-full bg-body top-0 duration-[0.7s] ${activeChat !== '0' ? 'absolute -translate-x-full' : null}`}>
            <header className='user_chat_header bg-content relative grid py-1 px-4'>
                <div className='flex items-center'>
                    <button onClick={() => dispatch(setActiveChat('0'))}>
                        <ArrowPrev />
                    </button>
                    <img
                        className='w-14 rounded-full mx-5'
                        src={placeholder} alt="" />
                    <h1 className='text-xl text-medium text-primary'>
                        {activeContactChat[0]?.name.length > 20 ? activeContactChat[0]?.name.slice(0, 28) + "..." : activeContactChat[0]?.name}</h1>
                </div>
                <button
                    onClick={() => setOptionDropdown(prev => !prev)}
                    className='user_chat_navigation_btn'>
                    <ThreeDots />
                </button>
                <div
                    onMouseLeave={() => setOptionDropdown(false)}
                    className='absolute right-20 top-20'>
                    {
                        optionDropdown ? <ChatOptionDropdown /> : null
                    }
                </div>
            </header>
            <UserChatBody />
            <UserChatFooter />
        </div>
    )
}

export default MobileUserChat