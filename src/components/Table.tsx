import ExpenseItem from "./ExpenseItem";

function Table({
  expenses,
  showBudget = true,
}: {
  expenses: {
    id: string;
    name: string;
    amount: number;
    createdAt: number;
    budgetId: string;
  }[];
  showBudget?: boolean;
}) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (heading, i) => (
                <th key={i}>{heading}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
