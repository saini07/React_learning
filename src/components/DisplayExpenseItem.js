import ExpenseItem from "./ExpenseItem";
import './DisplyExpenseItem.css';

function DisplayExpensesItem(expenses) {
    let data = expenses.expenses;
    return (
        <div>
        <ExpenseItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpenseItem>
        <ExpenseItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpenseItem>
        <ExpenseItem title={data[2].title} date={data[2].date} amount={data[2].amount}></ExpenseItem>
        <ExpenseItem title={data[3].title} date={data[3].date} amount={data[3].amount}></ExpenseItem>
        </div>
    );
}

export default DisplayExpensesItem;