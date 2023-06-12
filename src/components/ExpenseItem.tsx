import { Link, useFetcher } from "react-router-dom";
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";
function ExpenseItem({
  expense,
  showBudget = true,
}: {
  expense: {
    id: string;
    name: string;
    amount: number;
    createdAt: number;
    budgetId: string;
  };
  showBudget?: boolean;
}) {
  const budget = getAllMatchingItems("budgets", "id", expense.budgetId)[0];
  const fetcher = useFetcher();
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={
              {
                "--accent": budget.color,
              } as React.CSSProperties
            }
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <button
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
            name="expenseId"
            value={expense.id}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}
export default ExpenseItem;
