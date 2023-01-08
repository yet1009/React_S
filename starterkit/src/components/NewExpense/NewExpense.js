import React from 'react'
import ExpenseFilter from '../Expense/ExpenseFilter';
import Expensesform from './Expensesform'
import './NewExpense.css';


const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);

        onAddExpense(expenseData)
    }

    return (
        <>
           
            <div className='new-expense'>
                <Expensesform onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        </>
    )
}

export default NewExpense
