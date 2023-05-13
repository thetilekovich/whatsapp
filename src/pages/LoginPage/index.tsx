import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setAuth } from '../../app/slices/userSlice'
import Loader from '../../components/Loader'
import WhatsappIcon from '../../statics/icons/WhatsappIcon'
import './style.css'


const LoginPage = () => {

    return (
        <div className='login_gen'>
            <div className='bg-green'></div>
            <div className='login_container'>
                <div className='login_icon'>
                    <WhatsappIcon />
                    <h1>WhatsApp Web</h1>
                </div>
                <div className='login_content'>
                        <div className='login_instruction'>
                            <h1>Используйте WhatsApp на компьютере</h1>
                            <ol className='login_instruction_list'>
                                <li>Откройте WhatsApp на своем телефоне</li>
                                <li>Нажмите Меню или Настройки и выберите Связанные устройства</li>
                                <li>Нажмите Привязка устройства</li>
                                <li>Наведите свой телефон на этот экран, чтобы считать QR-код</li>
                            </ol>
                        </div>
                        <div className='login-qrcode'>
                            <Loader/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage