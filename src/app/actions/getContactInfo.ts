import axios from "axios"
import { contactInfoApi } from "../../api/greenApi"


export const getContactData = async (id: string) => {
    try {
        const res = await axios(contactInfoApi, {params: {"chatId": id}})
        const data = (await res).data
        console.log(data)
        return data
    } catch (error) {
        return (error as Error).message
    }
}