import { useEffect, useRef, useState } from "react"
import { getChatsHistory } from "../../app/actions/getChatsHistory"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import IncomeMessage from "../IncomeMessage"
import Loader from "../Loader"
import OutgoingMessage from "../OutgoingMessage"

const UserChatBody = () => {
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const { pending, error, chatData } = useAppSelector(s => s.userChat)
    const dispatch = useAppDispatch()

    const getChatHistoryFunc = () => {
        if (activeChat !== '0') {
            dispatch(getChatsHistory(activeChat))
        }
    }

    useEffect(() => {
        getChatHistoryFunc()
    }, [activeChat])
    return (
        <ul className={`h-[79vh] px-5 py-5 overflow-scroll flex flex-col ${pending || error ? 'items-center' : ''}`}>
            {
                    chatData?.length ?
                        chatData?.map((el) => el.type === 'incoming' ?
                            <IncomeMessage key={el.idMessage} el={el} />
                            :
                            <OutgoingMessage key={el.idMessage} el={el} />
                        ) : null
            }
        </ul>
    )
}

export default UserChatBody