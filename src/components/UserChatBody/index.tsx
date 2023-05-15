import { useEffect } from "react"
import { getChatsHistory } from "../../app/actions/getChatsHistory"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Loader from "../Loader"
const messages = [

]





const UserChatBody = () => {
    const { activeChat } = useAppSelector(s => s.InterfaceSlice)
    const { pending, error, chatData } = useAppSelector(s => s.userChat)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getChatsHistory())
    }, [])
    return (
        <ul className={`h-[79vh] px-5 py-5 overflow-scroll flex ${pending || error ? 'items-center justify-center' : 'items-end'}`}>
            {
                pending ?
                    <li> <Loader /> </li> :
                    error ?
                        <li className="text-xl italic text-red-700">Something get wrong</li> :
                        chatData?.map(el => (
                            <li key={el.idMessage}>

                            </li>
                        ))
            }
        </ul>
    )
}

export default UserChatBody