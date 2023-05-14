import React from 'react'
import SendMessage from '../../statics/icons/SendMessage'

const UserChatFooter = () => {
    return (
        <footer className='absolute flex items-center justify-center bg-content h-20 bottom-0 right-0 left-0'>
            <input className='w-10/12 py-2  px-5 text-xl mx-3 bg-content-body text-primary' type="text" />
            <button className='rotate-45'>
                <SendMessage />
            </button>
        </footer>)
}

export default UserChatFooter