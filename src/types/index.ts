export type userSliceType = {
    auth: boolean,
    activeChat: string,
}

export type contactInfoType = {
    chatId: string,
    avatar: string,
    name: string,
    category: string,
    email: string,
    products: any,
    lastSeen: string,
    isArchive: string,
    isDisappearing: string,
    isMute: string,
    messageExpiration: number,
    muteExpiration: number
}


export type responseQrCode = {
    type: string,
    message: string,
}

export type accountStatusType = {
    stateInstance: string,
}

export type accountChatsType = {
    name: string,
    id: string,
    type: string
}
