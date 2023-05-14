import { useEffect, useState } from 'react'
import { getAccountStatus } from '../../app/actions/getAccountStatus'
import { getQrCode } from '../../app/actions/getQrCode'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Loader from '../../components/Loader'
import WhatsappIcon from '../../statics/icons/WhatsappIcon'


const LoginPage = () => {
    const { pendingQrCode, auth, error, qrCode } = useAppSelector(s => s.userSlice)
    const dispatch = useAppDispatch()
    const [count, setCount] = useState(0)

    setInterval(() => {
        setCount(p => p += 1)
    }, 5000)

    useEffect(() => {
        dispatch(getAccountStatus())
    }, [count])
    return (
        <div className='bg-body h-full w-full'>
            <div className='absolute w-full h-[25vh] bg-outgoing-message'></div>
            <div className='flex flex-col w-full absolute top-14 px-20 justify-center lg:justify-start '>
                <div className=' flex items-center mb-10'>
                    <WhatsappIcon />
                    <h1 className='text-2xl font-semibold mx-4 text-primary'>WhatsApp Web</h1>
                </div>
                <div className='bg-gray-100 px-10 pt-10 pb-5 md:py-20 flex flex-col lg:flex-row justify-between items-center '>
                    <div className=' mb-10 lg:mr-10'>
                        <h1 className='text-3xl text-center lg:text-start mb-5'>Используйте WhatsApp на компьютере</h1>
                        <ol className='list-disc hidden sm:block text-lg'>
                            <li>Откройте WhatsApp на своем телефоне</li>
                            <li>Нажмите Меню или Настройки и выберите Связанные устройства</li>
                            <li>Нажмите Привязка устройства</li>
                            <li>Наведите свой телефон на этот экран, чтобы считать QR-код</li>
                        </ol>
                    </div>
                    <div className='w-56 h-56 flex justify-center items-center'>
                        {
                            qrCode ?
                                <img className='' src={`data:image/png;base64, ${qrCode.message}`} alt="" />
                                :
                                pendingQrCode && !auth ? <Loader /> :
                                    <button
                                        onClick={() => dispatch(getQrCode())}
                                        className='text-primary bg-body py-2 px-4 rounded-md'>
                                        Get QR-code
                                    </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage