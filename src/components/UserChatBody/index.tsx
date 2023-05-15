import { useEffect, useRef } from "react"
import { getChatsHistory } from "../../app/actions/getChatsHistory"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import IncomeMessage from "../IncomeMessage"
import Loader from "../Loader"
import OutgoingMessage from "../OutgoingMessage"

const UserChatBody = () => {
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const { pending, error, chatData } = useAppSelector(s => s.userChat)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getChatsHistory(activeChat))
    }, [activeChat])
    return (
        <ul className={`h-[79vh] px-5 py-5 overflow-scroll grid ${pending || error ? 'items-center justify-center' : ''}`}>
            {
                pending ?
                    <li> <Loader /> </li> :
                    error ?
                        <li className="text-xl italic text-red-700">Something get wrong</li> :
                        chatData?.length ?
                            chatData?.map((el) => el.typeMessage === 'textMessage' ? el.type === 'incoming' ?
                                <IncomeMessage key={el.idMessage} el={el} />
                                :
                                <OutgoingMessage key={el.idMessage} el={el} /> : null
                            ) : null
            }
        </ul>
    )
}

export default UserChatBody