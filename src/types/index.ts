export type userSliceType = {
    auth: boolean,
    activeChat: string,
}

export type contactsListType = {
    id: string,
    img: any,
    contactName: string,
    lastMessage: string,
    lastMessageTime: string,
    newMessages?: number
}