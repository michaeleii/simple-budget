import { toast } from "react-toastify";
import { createExpense, deleteItem } from "../helpers";

export async function budgetAction({ request }: { request: any }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} Created!`);
    } catch (err) {
      throw new Error("There was a problem creating your expense.");
    }
  }
  if (_action === "deleteExpense") {
    try {
      deleteItem("expenses", values.expenseId);
      return toast.success(`Expense deleted!`);
    } catch (err) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}
