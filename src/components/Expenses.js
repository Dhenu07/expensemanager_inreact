import './Expenses.css';
import ExpenseItem from './ExpenseItem';
function Expenses(props){
    return(
        <div className="expenses">
              <ExpenseItem expense={props.items[0]}> </ExpenseItem>
              <ExpenseItem expense={props.items[1]}> </ExpenseItem>
              <ExpenseItem expense={props.items[2]}> </ExpenseItem>
              <ExpenseItem expense={props.items[3]}> </ExpenseItem>
        </div>
    );
    
}
export default Expenses;