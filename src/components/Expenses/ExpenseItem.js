import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';
const ExpenseItem = (data)=>{
    const [title, setTitle] = useState(data.title)
    const clickHandler = ()=>{
        setTitle('Updated!!')
        console.log("Clicked!!!");
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={data.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem