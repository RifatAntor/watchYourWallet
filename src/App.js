// import ExpenseItems from "./components/ExpenseItems";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 50,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 50,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 50,
    date: new Date(2021, 5, 12),
  },
];
 
function App() {

  const [expenses,setExpenses] = useState(DummyExpense)
  

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];

    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} /> 
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
