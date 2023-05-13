import React from 'react'
import ArrowPrev from '../../../statics/icons/ArrowPrev'
import './style.css'
const NewChatDropDown = () => {
  return (
    <div className='newchat_dropdown'>
       <header className='newchat_dropdown_header'>
            <ArrowPrev/>
            <h1>Новый чат</h1>
       </header>
       <section className='newchat_dropdown_body'>
            
       </section>
    </div>
  )
}

export default NewChatDropDown