import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const onSaveExpenseHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
        // console.log(expenseData);

    }
    
    return <div className='new-expense'>
        <ExpenseForm onSaveExpense = {onSaveExpenseHandler} />

    </div>
   
}
export default NewExpense;