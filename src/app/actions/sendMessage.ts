import axios from "axios"
import { sendMessageApi } from "../../api/greenApi"



export const sendMessage = async (chatId: string, message: string) => {
    const params = {
        "chatId": chatId,
        "message": message
    }
    try {
        const res = await axios.post(sendMessageApi, params)
        const data = await  res.data
        console.log(await data)
        return true
    } catch (error) {
        return false
    }
}