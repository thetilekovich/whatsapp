import ChatNotActive from '../../statics/icons/ChatNotActive'

const UserChatNotActive = () => {
    return (
        <div className='flex flex-col self-center items-center text-secondary'>
            <ChatNotActive />
            <article className='text-primary text-center mb-24'>
                <h1 className='text-3xl font-bold my-4'>WhatsApp Web</h1>
                <p className='font-medium my-2 '>Отправляйте и получайте сообщения без необходимости оставлять телефон <br /> подключенным.</p>
                <p>Используйте WhatsApp одновременно на четырех связанных устройствах и одном <br /> телефоне.</p>
            </article>
            <p className='mb-8'>Защищено сквозным шифрованием</p>
        </div>)
}

export default UserChatNotActive