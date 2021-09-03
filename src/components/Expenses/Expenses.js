import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredItems = items.filter((item) => item.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No expenses found.</p>;
    if (filteredItems.length > 0) {
        expensesContent = filteredItems.map(expense => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            );
        });
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;