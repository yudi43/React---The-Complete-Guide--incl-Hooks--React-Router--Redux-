import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      console.log("setting title");
      setEnteredTitle(value);
    } else if (identifier === "date") {
      console.log("setting date");
      setEnteredDate(value);
    } else {
      console.log("setting amount");
      setEnteredAmount(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
