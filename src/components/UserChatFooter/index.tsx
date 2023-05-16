import { useState } from 'react'
import { getChatsHistory } from '../../app/actions/getChatsHistory'
import { sendMessage } from '../../app/actions/sendMessage'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import SendMessage from '../../statics/icons/SendMessage'

const UserChatFooter = () => {
    const [message, setMessage] = useState('')
    const {activeChat} = useAppSelector(s => s.InterfaceSlice)
    const dispatch = useAppDispatch()

    const sendMessageFunc = async (chatId: string, message: string) => {
        const res = await sendMessage(chatId, message)
        if(res){
            setMessage('')
            setTimeout(() => dispatch(getChatsHistory(activeChat)),  1000)
        }else{
            setMessage('We can\'t send your message')
        }
    }


    return (
        <footer className='flex items-center py-3 justify-center bg-content'>
            <input
            value={message}
            onChange={(el) => setMessage(el.target.value)}
            className='w-10/12 py-2 px-5 text-xl mx-3 bg-content-body text-primary' type="text" />
            <button
            onClick={() => sendMessageFunc(activeChat, message)}
            className='rotate-45'>
                <SendMessage />
            </button>
        </footer>)
}

export default UserChatFooter