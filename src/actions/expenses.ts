import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function expensesAction({ request }: { request: any }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      deleteItem("expenses", values.expenseId);
      return toast.success(`Expense deleted!`);
    } catch (err) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}
