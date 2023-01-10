import React, { useState } from 'react'
import ExpenseFilter from '../Expense/ExpenseFilter';
import Expensesform from './Expensesform'
import './NewExpense.css';


const NewExpense = ({ onAddExpense }) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);

        onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHanlder = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <>
           
            <div className='new-expense'>
                {
                    !isEditing && <button onClick={startEditingHanlder}>Add NEW Expense</button>
                }
                {
                    isEditing && <Expensesform onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
                }
                
            </div>
        </>
    )
}

export default NewExpense
