import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props){
   return (
      <body>
      <div className="expense-item">
        <ExpenseDate date={props.expense.date}/>
         <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
         </div>
      </div>
      </body>
   )
}
export  default ExpenseItem;