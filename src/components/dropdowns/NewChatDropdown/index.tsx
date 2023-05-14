import ArrowPrev from '../../../statics/icons/ArrowPrev'


const NewChatDropDown = ({setCloseDrop}:{setCloseDrop: (a: boolean) => void} ) => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <header className='bg-content pt-10 pb-5 px-8 flex items-center'>
        <button
        onClick={() => setCloseDrop(false)}
        className='newchat_dropdown_prevbtn'>
          <ArrowPrev />
        </button>
        <h1 className='text-primary text-2xl font-medium mx-5'>Новый чат</h1>
      </header>
      <section className='bg-body h-full flex justify-center items-start pt-20'>
        <input className='bg-primary px-4 py-2' type="text" />
        <button className='bg-primary px-4 py-2'>Отправить</button>
      </section>
    </div>
  )
}

export default NewChatDropDown