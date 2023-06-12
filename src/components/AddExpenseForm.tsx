import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { RefObject, useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

function AddExpenseForm({
  budgets,
}: {
  budgets: {
    id: string;
    name: string;
    createdAt: number;
  }[];
}) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const focusRef = useRef() as RefObject<HTMLInputElement>;

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
      focusRef.current?.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new
        <span className="accent">
          {budgets.length === 1 && ` ${budgets.map((b) => b.name)} `}
        </span>
        Expense
      </h2>
      <fetcher.Form className="grid-sm" method="post" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              ref={focusRef}
              required
              placeholder="e.g., Coffee"
            />
            <div className="grid-xs">
              <label htmlFor="newExpenseAmount">Amount</label>
              <input
                min="0.00"
                type="number"
                name="newExpenseAmount"
                id="newExpenseAmount"
                step="0.01"
                required
                inputMode="decimal"
                placeholder="e.g., $300.00"
              />
            </div>
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget">
            {[...budgets]
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting</span>
          ) : (
            <>
              <span>Add Expense</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}
export default AddExpenseForm;
