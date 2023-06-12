import { Form, Link } from "react-router-dom";
import { formatCurrency, formatPercentage, totalSpent } from "../helpers";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

function BudgetItem({
  budget,
  showDelete = false,
}: {
  budget: {
    id: string;
    name: string;
    amount: number;
    color: string;
  };
  showDelete?: boolean;
}) {
  const { id, name, amount, color } = budget;
  const budgetSpent = totalSpent(id);

  return (
    <div
      className="budget"
      style={
        {
          "--accent": color, // CSS custom property
        } as React.CSSProperties
      }
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={budgetSpent}>
        {formatPercentage(budgetSpent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(budgetSpent)} spent</small>
        <small>{formatCurrency(amount - budgetSpent)} remaining</small>
      </div>
      {showDelete ? (
        <Form
          className="flex-sm"
          method="post"
          action="delete"
          onSubmit={(e) => {
            if (
              !confirm(
                "Are you sure you want to permanently delete this budget?"
              )
            )
              e.preventDefault();
          }}
        >
          <button type="submit" className="btn">
            <span>Delete Budget</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}
export default BudgetItem;
