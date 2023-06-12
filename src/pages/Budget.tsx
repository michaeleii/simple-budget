import { useLoaderData } from "react-router-dom";
import { budgetLoader } from "../loaders/budget";
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

function Budget() {
  const { budget, expenses } = useLoaderData() as any;
  return (
    <div
      className="grid-lg"
      style={
        {
          "--accent": budget.color,
        } as React.CSSProperties
      }
    >
      <h1 className="h2">
        <span className="accent">{budget.name} </span>
        Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name} </span>
            Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
}
export default Budget;
