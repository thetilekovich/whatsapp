import axios from "axios"
import { checkWhatsappApi } from "../../api/greenApi"



export const checkWhatsapp = async (phoneNumber: string) => {
    try {
        const res = await axios.post(checkWhatsappApi, {"phoneNumber": phoneNumber})
        const {data} = await res
        return data.existsWhatsapp
    } catch (error) {
        return ''
    }
}