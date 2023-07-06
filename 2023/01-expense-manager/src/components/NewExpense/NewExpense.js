import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
