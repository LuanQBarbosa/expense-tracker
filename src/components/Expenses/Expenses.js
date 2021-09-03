import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const expenseItems = items.map(expense => {
        return (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        );
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseItems}
            </Card>
        </div>
    );
}

export default Expenses;