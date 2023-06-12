import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";
import { redirect } from "react-router-dom";

function deleteBudget({ params }) {
  try {
    deleteItem("budgets", params.id);
    const budgetExpenses = getAllMatchingItems(
      "expenses",
      "budgetId",
      params.id
    );
    budgetExpenses.forEach((expense) => deleteItem("expenses", expense.id));
    toast.success(`Budget deleted!`);
    return redirect("/");
  } catch (err) {
    throw new Error("There was a problem deleting your budget.");
  }
}

export default deleteBudget;
