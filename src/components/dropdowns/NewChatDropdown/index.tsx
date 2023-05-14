import ArrowPrev from '../../../statics/icons/ArrowPrev'
import './style.css'


const NewChatDropDown = ({setCloseDrop}:{setCloseDrop: (a: boolean) => void} ) => {
  return (
    <div className='newchat_dropdown'>
      <header className='newchat_dropdown_header'>
        <button
        onClick={() => setCloseDrop(false)}
        className='newchat_dropdown_prevbtn'>
          <ArrowPrev />
        </button>
        <h1>Новый чат</h1>
      </header>
      <section className='newchat_dropdown_body'>
        <input type="text" />
        <button>Отправить</button>
      </section>
    </div>
  )
}

export default NewChatDropDown