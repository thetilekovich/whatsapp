import SendMessage from '../../statics/icons/SendMessage'

const UserChatFooter = () => {
    return (
        <footer className='flex items-center py-3 justify-center bg-content'>
            <input className='w-10/12 py-2 px-5 text-xl mx-3 bg-content-body text-primary' type="text" />
            <button className='rotate-45'>
                <SendMessage />
            </button>
        </footer>)
}

export default UserChatFooter