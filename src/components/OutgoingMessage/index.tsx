import React from 'react'
import { chatHistoryType } from '../../types'

const OutgoingMessage = ({el}: {el: chatHistoryType}) => {
  return (
    <li className='self-end my-2 break-words max-w-[300px]'>
        <p className='flex-inline pr-1 py-2 pl-3 rounded-lg bg-outgoing-message '>{el.textMessage}</p>
    </li>
  )
}

export default OutgoingMessage