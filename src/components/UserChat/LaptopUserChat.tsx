import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import './style.css'
import ThreeDots from '../../statics/icons/ThreeDots'
import ChatOptionDropdown from '../dropdowns/ChatOptionDropdown'
import placeholder from '../../statics/images/placeholderImg.png'
import UserChatNotActive from '../UserChatNotActive'
import UserChatFooter from '../UserChatFooter'



const LaptopUserChat = () => {
    const [optionDropdown, setOptionDropdown] = useState(false)
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const { chats } = useAppSelector(s => s.userDatas)
    let activeContactChat = chats.filter(el => el.id === activeChat)


    return (
        activeContactChat[0] ?
            <div className='relative h-[100vh]'>
                <header className='user_chat_header bg-content relative grid py-1 px-4'>
                    <div className='flex items-center'>
                        <img
                            className='w-14 rounded-full mx-5'
                            src={placeholder} alt="" />
                        <h1 className='text-lg text-medium text-primary'>
                            {activeContactChat[0]?.name.length > 20 ? activeContactChat[0]?.name.slice(0, 28) + "..." : activeContactChat[0]?.name}</h1>
                    </div>
                    <button
                        onClick={() => setOptionDropdown(prev => !prev)}>
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
                <section>
                    {//body text chat
                    }
                </section>
                <UserChatFooter />
            </div> :
            <UserChatNotActive />
    )
}

export default LaptopUserChat