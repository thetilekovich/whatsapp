import { useEffect } from 'react'
import ArrowPrev from '../../../statics/icons/ArrowPrev'
import Development from '../../Development'




const ProfileInfoDropdown = ({setCloseDrop}: {setCloseDrop: (a: boolean) => void}) => {

    useEffect(() => {

    }, [])

    return (
        <div className='h-full'>
            <header className='bg-content pt-10 px-7 pb-5 flex items-center'>
                <button
                    onClick={() => setCloseDrop(false)}
                    className='profile_dropdown_prevbtn'>
                    <ArrowPrev />
                </button>
                <h1 className='text-2xl font-medium text-primary mx-5'>Ваш профиль</h1>
            </header>
            <section className='bg-body flex justify-center items-start py-12 h-full'>
                <Development/>
            </section>
        </div>)
}

export default ProfileInfoDropdown