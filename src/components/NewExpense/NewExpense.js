import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [showAddExpense, setShowAddExpense] = useState(false);

	const onAddExpenseHandler = () => setShowAddExpense(true);

	const hideAddExpenseHandler = () => setShowAddExpense(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setShowAddExpense(false);
	};


	// {showAddExpense && <NewExpense onAddExpense={addExpenseHandler} />}

  return (
		<div className="new-expense">
			{!showAddExpense && <button onClick={onAddExpenseHandler} showAdd={showAddExpense}>Add New Expense</button> }
			{showAddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideAddExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
