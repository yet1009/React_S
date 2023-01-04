import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate({ item }) {

    let m = item['date'].toLocaleString('en-US', { month: 'long' })
    let d = item['date'].toLocaleString('en-US', { day: '2-digit' })
    let y = item['date'].getFullYear()
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{m}</div>
        <div className='expense-date__year'>{y}</div>
        <div className='expense-date__day'>{d}</div>
    </div>
  )
}
