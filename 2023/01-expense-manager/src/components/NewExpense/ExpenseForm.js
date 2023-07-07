import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // function titleChangeHandler(event) {
  //   setEnteredTitle(event.target.value);
  // }
  // function amountChangeHandler(event) {
  //   setEnteredAmount(event.target.value);
  // }
  // function dateChangeHandler(event) {
  //   setEnteredDate(event.target.value);
  // }

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
      enteredAmount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log("This is submitted: ", expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
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
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
