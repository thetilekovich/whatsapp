import React from 'react'
import { chatHistoryType } from '../../types'

const IncomeMessage = ({ el }: { el: chatHistoryType }) => {
    return (
        <li className=' self-start text-start my-2 break-words max-w-[300px]'>
            <p className='flex-inline pr-3 pl-1 py-2 rounded-lg bg-income-message font-medium text-white'>{el.textMessage}</p>
        </li>
    )
}

export default IncomeMessage