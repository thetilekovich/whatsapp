import React from 'react'
import ArrowPrev from '../../../statics/icons/ArrowPrev'
import './style.css'
const ProfileInfoDropdown = ({setCloseDrop}: {setCloseDrop: (a: boolean) => void}) => {
    return (
        <div className='profile_dropdown'>
            <header className='profile_dropdown_header'>
                <button
                    onClick={() => setCloseDrop(false)}
                    className='profile_dropdown_prevbtn'>
                    <ArrowPrev />
                </button>
                <h1>Ваш профиль</h1>
            </header>
            <section className='profile_dropdown_body'>
                
            </section>
        </div>)
}

export default ProfileInfoDropdown