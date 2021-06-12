import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  // 	enteredDate: '',
  // 	enteredAmount: '',
  // 	enteredTitle: '',
  // });

  const amountChangeHandler = (event) => {
    // setUserInput({
    // 	...userInput,
    // 	enteredAmount: event.target.value,
    // })
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    // 	return {...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // setUserInput((prevState) => {
    // 	return {...prevState, enteredDate: event.target.value};
    // });
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    // 	return {...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    // setUserInput((prevState) => {
    // 	return {...prevState, enteredTitle: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            id=""
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2021-01-01"
            max="2022-12-12"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
