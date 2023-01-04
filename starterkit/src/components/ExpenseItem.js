import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem({ expenses }) {

    const [title, setTitle] = useState('');

    const clickHandler = () => {
        console.log('clickeds')
    }

    console.log(expenses)
    return (
        expenses.map(item => {
            
            return (
                <div className='expense-item'>
                    <ExpenseDate item={item} />
                    <div className='expense-item__description'>
                        <h2>{item.title}</h2>
                        <div className='expense-item__price'>${item.amount}</div>
                    </div>
                    <button onClick={clickHandler}>change Title</button>
                </div>
            )
        })
    )

}