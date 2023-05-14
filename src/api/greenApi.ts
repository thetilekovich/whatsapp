import { ApiTokenInstance, IdInstance } from "./constants"

export const qrCodeApi = `https://api.green-api.com/waInstance${IdInstance}/qr/${ApiTokenInstance}`

export const accountStatusApi = `https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${ApiTokenInstance}`

export const accountChatsApi = `https://api.green-api.com/waInstance${IdInstance}/GetContacts/${ApiTokenInstance}`


export const contactInfoApi = `https://api.green-api.com/waInstance${IdInstance}/getContactInfo/${ApiTokenInstance}`

export const logoutApi =  `https://api.green-api.com/waInstance${IdInstance}/Logout/${ApiTokenInstance}`