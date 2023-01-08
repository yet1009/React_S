import React, { useState } from 'react'
import '../Expense/ExpenseItem.css'
import ExpenseDate from '../Expense/ExpenseDate'
import ExpenseFilter from './ExpenseFilter';

export default function ExpenseItem({ expenses }) {

    const [title, setTitle] = useState('');

    const [filteredYear, setFilteredYear] = useState('2020')

    const clickHandler = () => {
        console.log('clicked')
    }

    console.log(expenses)

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            {

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

            }
            
        
        </div>
        
    )

}