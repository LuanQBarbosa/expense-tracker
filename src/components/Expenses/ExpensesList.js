import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    const expensesContent = items.map(expense => {
        return (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        );
    });

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
};

export default ExpensesList;