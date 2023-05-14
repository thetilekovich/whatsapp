import axios from "axios"
import { logoutApi } from "../../api/greenApi"




export const logout = async () => {
    try {
        const res = await axios(logoutApi)
        const data = (await res).data
        return data.isLogout
    } catch (error) {
      console.log(error)
    }
  }